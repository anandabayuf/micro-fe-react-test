import {
  Flex,
  Checkbox,
  Text,
  Button,
  Spinner,
  Grid,
  ButtonGroup,
} from "@chakra-ui/react";
import type { ChangeEvent } from "react";
import { useEffect } from "react";
import { FormattedMessage } from "react-intl";

import UserGroupCheckBox from "lib/components/userManagement/checkbox/userGroupCheckBox";
import { useConnectMenuGroup } from "lib/services/api/userManagement/group/getListMenu";
import type { MenuList } from "lib/services/api/userManagement/group/getListMenu/types";
import { useGetUserListGroup } from "lib/services/api/userManagement/group/getUserList";
import { useUserManagement } from "lib/store/userManagement";
import {
  changeDotSeparatorIntoIdFormat,
  changeIntoIdFormat,
} from "lib/utils/id";
import { EXLCUEDED_MENU } from "../../constants";

type StepTwoRoleProps = {
  id?: string;
};

export const StepTwoRole = ({ id }: StepTwoRoleProps) => {
  const { setFormGroup, formGroup } = useUserManagement();

  const { data } = useGetUserListGroup(formGroup.code);

  useEffect(() => {
    const userList = data?.content?.map((i) => i.id);
    setFormGroup({
      ...formGroup,
      userList,
    });
  }, [data]);

  const { menuList } = formGroup;

  const { data: menuListData } = useConnectMenuGroup();

  const handleSelectAccess = (e: ChangeEvent<HTMLInputElement>) => {
    if (e.currentTarget.checked) {
      setFormGroup({
        ...formGroup,
        menuList: [...menuList, JSON.parse(e.currentTarget.value)],
      });
    } else {
      setFormGroup({
        ...formGroup,
        menuList: menuList.filter(
          (item) => item.id !== JSON.parse(e.currentTarget.value).id
        ),
      });
    }
  };

  const handleFeature = (item: MenuList, e: ChangeEvent<HTMLInputElement>) => {
    const menuListTemp = menuList.find((menu) => menu.id === item.id);
    if (menuListTemp?.features) {
      if (e.currentTarget.checked) {
        menuListTemp.features = [
          ...menuListTemp.features,
          JSON.parse(e.currentTarget.value),
        ];
      } else {
        menuListTemp.features = menuListTemp.features.filter(
          (menu) => menu.id !== JSON.parse(e.currentTarget.value).id
        );
      }
      setFormGroup({ ...formGroup });
    }
  };

  const handleAccess = (item: MenuList, target: boolean) => {
    const menuListTemp = menuList.find((menu) => menu.id === item.id);
    if (menuListTemp) {
      menuListTemp.viewOnly = target;

      setFormGroup({ ...formGroup });
    }
  };

  const generateMenuValue = (item: MenuList) => {
    if (!item.hasAccess) {
      return JSON.stringify({ ...item, features: [] });
    }
    return JSON.stringify(item);
  };

  const generateConfiguration = (item: MenuList, disabled: boolean) => {
    if (item.hasAccess) {
      return (
        <Flex>
          <ButtonGroup isAttached w="full">
            <Button
              id={`${id}-step-2-form-${changeIntoIdFormat(
                item.name
              )}-view-only-btn`}
              w="50%"
              variant={
                menuList.find((menu) => menu.id === item.id)?.viewOnly
                  ? "solid"
                  : "outline"
              }
              onClick={() => handleAccess(item, true)}
              disabled={disabled}
            >
              Hanya Lihat
            </Button>
            <Button
              id={`${id}-step-2-form-${changeIntoIdFormat(
                item.name
              )}-full-access-btn`}
              w="50%"
              variant={
                !menuList.find((menu) => menu.id === item.id)?.viewOnly
                  ? "solid"
                  : "outline"
              }
              onClick={() => handleAccess(item, false)}
              disabled={disabled}
            >
              Full Akses
            </Button>
          </ButtonGroup>
        </Flex>
      );
    }
    return (
      <Flex direction="column" gap={4}>
        <Text opacity={disabled ? "0.3" : "1"}>
          Pilih widget yang akan ditampilkan
        </Text>
        <Grid templateColumns="repeat(2, 1fr)" columnGap={6} rowGap={2}>
          {item.features?.map((feat) => (
            <Checkbox
              id={`${id}-step-2-form-checkbox-${changeDotSeparatorIntoIdFormat(
                feat.name
              )}`}
              key={feat.id}
              value={JSON.stringify({
                id: feat.id,
                name: feat.name,
              })}
              onChange={(e) => handleFeature(item, e)}
              isChecked={menuList
                .find((menu) => menu.id === item.id)
                ?.features?.some((feature) => feature.id === feat.id)}
              disabled={disabled}
              colorScheme="orange"
            >
              <Text>
                <FormattedMessage id={feat.name} />
              </Text>
            </Checkbox>
          ))}
        </Grid>
      </Flex>
    );
  };

  return (
    <Flex mt={8} gap={4} flexDir="column" maxHeight="450px" overflow="scroll">
      <Text fontWeight={400} fontSize={16}>
        <FormattedMessage id="chooseGroupMenu" />
      </Text>
      {!menuListData ? (
        <Flex justifyContent="center" alignItems="center">
          <Spinner size="lg" />
        </Flex>
      ) : (
        menuListData?.content?.map((item) => {
          if (!EXLCUEDED_MENU.find((menu) => item?.id.includes(menu)))
            return (
              <Flex flexDirection="column" key={item.id} gap={4}>
                <UserGroupCheckBox
                  id={`${id}-step-2`}
                  value={generateMenuValue(item)}
                  onChange={handleSelectAccess}
                  isChecked={menuList.some((check) => check.id === item.id)}
                  label={item.name}
                />

                {generateConfiguration(
                  item,
                  !menuList.some((check) => check.id === item.id)
                )}
                <hr />
              </Flex>
            );
        })
      )}
      <Text fontWeight={400} fontSize={16}>
        <FormattedMessage id="chooseGroupMenuNote" />
      </Text>
    </Flex>
  );
};
