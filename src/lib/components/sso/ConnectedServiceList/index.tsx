import {
  Grid,
  useBreakpointValue,
  useDisclosure,
  Spinner,
  Flex,
} from "@chakra-ui/react";
import * as React from "react";
import { useIntl } from "react-intl";

import ModalWrapper from "lib/components/shared/ModalWrapper";
import { useChannels } from "lib/components/sso/shared/hooks";
import { useToastWrapper } from "lib/hooks/useAppToast";
import type { ConnectedChannelEntry } from "lib/services/api/cxo/channelportal/types";
import { useChannelSelection } from "lib/services/api/cxo/getChannelSelection";
import { getPortalOtp } from "lib/services/api/cxo/getOtp";
import { unlinkService } from "lib/services/api/cxo/unlinkservice";

import ConfirmRemoveChannelForm from "./components/ConfirmRemoveChannelForm";
import ConfirmRemoveChannelHeader from "./components/ConfirmRemoveChannelHeader";
import ConnectedChannelItem from "./components/ConnectedChannelItem";
import type { RedirectActionRequest } from "./types";

type ConnectedServiceListProps = {
  id?: string;
};

const ConnectedServiceList: React.FC<ConnectedServiceListProps> = ({ id }) => {
  const intl = useIntl();
  const { isOpen, onOpen, onClose } = useDisclosure();
  const {
    isOpen: isFormExist,
    onOpen: onOpenRedirectForm,
    onClose: onCloseRedirectForm,
  } = useDisclosure();
  const toast = useToastWrapper();
  const modalSize = useBreakpointValue({ base: "full", md: "sm" });
  const [selectedChannel, setSelectedChannel] =
    React.useState<ConnectedChannelEntry>();
  const [isLoadingRemoveChannel, setIsLoadingRemoveChannel] =
    React.useState<boolean>(false);
  const [disableSSO, setDisableSSO] = React.useState<boolean>(false);
  const [redirectData, setRedirectData] =
    React.useState<RedirectActionRequest>();
  const [redirectUri, setRedirectUri] = React.useState<string>();
  const submitRedirectRef = React.useRef<HTMLButtonElement>(null);

  const { data, mutate } = useChannels();
  const { data: listChannel, isLoading } = useChannelSelection();

  const openRemoveChannelConfirmation = (id: string) => {
    const channel = data?.find((entry) => entry.id === id);
    if (channel) {
      setSelectedChannel(channel);
      onOpen();
    }
  };

  const handleCloseConfirmation = () => {
    setSelectedChannel(undefined);
    onClose();
    setIsLoadingRemoveChannel(false);
  };

  const handleConfirmRemove = async () => {
    if (selectedChannel) {
      setIsLoadingRemoveChannel(true);
      await unlinkService(selectedChannel.id)
        .then(() => {
          mutate();
          handleCloseConfirmation();
          toast({
            status: "success",
            description: intl.formatMessage({
              id: "unlinkChannelSuccess",
            }),
            duration: 5000,
            position: "top",
          });
        })
        .finally(() => {
          setIsLoadingRemoveChannel(false);
        });
    }
  };

  const redirectToService = async () => {
    submitRedirectRef.current?.click();
    setTimeout(() => {
      setRedirectData(undefined);
      setRedirectUri(undefined);
      onCloseRedirectForm();
    }, 100);
  };

  const handleClickRedirect = async (id: string) => {
    setDisableSSO(true);
    const channel = data?.find((entry) => entry.id === id);
    setTimeout(() => {
      setDisableSSO(false);
    }, 3000);
    if (channel) {
      await getPortalOtp(id).then((res) => {
        if (res.content?.redirecturi && res.content?.otp) {
          setRedirectUri(res.content.redirecturi);
          setRedirectData({
            userId: channel?.userId,
            companyId: channel?.corporateId,
            otp: res.content.otp,
          });
          onOpenRedirectForm();
          setTimeout(() => {
            redirectToService();
          }, 100);
        }
      });
    }
  };

  const groupChannel = React.useMemo(() => {
    if (listChannel) {
      return listChannel?.content?.map((entry) => {
        const found = data && data.filter((item) => item.channel === entry.id);
        if (found) {
          return {
            channel: entry,
            data: found,
          };
        }
        return {
          channel: entry,
          data: [],
        };
      });
    }
    return [];
  }, [data, listChannel]);

  if (isLoading) {
    return (
      <Flex justify="center" mt={4}>
        <Spinner />
      </Flex>
    );
  }

  if (!groupChannel || groupChannel.length === 0) return null;

  return (
    <>
      <Grid gap={4} padding={4} id={`${id}-channels`}>
        {groupChannel.map((entry) => (
          <ConnectedChannelItem
            id={`${id}-channel-item`}
            key={entry?.channel?.id}
            data={entry?.data}
            disabled={disableSSO}
            channel={entry?.channel}
            onClickRemove={openRemoveChannelConfirmation}
            onClickRedirect={handleClickRedirect}
          />
        ))}
      </Grid>

      <ModalWrapper
        id={`${id}-connected-service`}
        isOpen={isOpen}
        closeOnOverlayClick={false}
        size={modalSize}
        onClose={handleCloseConfirmation}
        withCloseButton={false}
        header={
          <ConfirmRemoveChannelHeader
            id={`${id}-connected-service-modal`}
            onClose={handleCloseConfirmation}
            isLoading={isLoadingRemoveChannel}
          />
        }
        body={
          <ConfirmRemoveChannelForm
            id={`${id}-connected-service-modal`}
            data={selectedChannel}
            onConfirmRemove={handleConfirmRemove}
            onClose={handleCloseConfirmation}
            isLoading={isLoadingRemoveChannel}
          />
        }
      />

      {isFormExist && (
        <form
          id={`${id}-connected-service-form`}
          hidden
          method="POST"
          action={redirectUri}
          target="_blank"
        >
          <input
            id={`${id}-connected-service-form-input-company-id`}
            type="hidden"
            name="companyId"
            value={redirectData?.companyId}
          />
          <input
            id={`${id}-connected-service-form-input-user-id`}
            type="hidden"
            name="userId"
            value={redirectData?.userId}
          />
          <input
            type="hidden"
            name="otp"
            id={`${id}-connected-service-form-input-otp`}
            value={redirectData?.otp}
          />
          <button
            id={`${id}-connected-service-form-submit-btn`}
            ref={submitRedirectRef}
            type="submit"
            aria-label="submit"
          />
        </form>
      )}
    </>
  );
};

export default ConnectedServiceList;
