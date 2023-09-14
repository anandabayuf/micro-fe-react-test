import { Container, Text } from "@chakra-ui/react";
import { TourProvider, useTour } from "@reactour/tour";
import KursConversion from "lib/components/dashboard/kurs/kurs-conversion";
import KursWidget from "lib/components/dashboard/kurs/kurs-widget";
import PageTitle from "lib/components/shared/PageTitle";
import WidgetWrapper from "lib/components/shared/widgets/WidgetWrapper";
import useModuleCount from "lib/hooks/useModuleCount";
import { useAuth } from "lib/store/auth";
import React from "react";
import shallow from "zustand/shallow";

const KursPage: React.FC = () => {
  const [userInfo] = useAuth((state) => [state.user], shallow);
  const [visited] = useModuleCount({
    userName: userInfo?.userName,
    currentModule: {
      name: "kurs",
      path: "/kurs",
    },
  });

  const { setIsOpen, setSteps } = useTour();

  React.useEffect(() => {
    setIsOpen(visited ? true : false);
    setSteps([
      {
        selector: "#kurs-title",
        content: (
          <p>
            Widget ini akan menampilkan detail dari informasi valas. User dapat
            memilih mata uang favorite yang akan ditampilkan pada widget
            dashboard kurs valas dengan minimal pemilihan mata uang favorite
            adalah 3 mata uang dan dengan maksimal pemilihan 5 mata uang. Cara
            memilih mata uang favorite:
            <ol>
              <li> Klik icon bintang pada sebelah kiri nama mata uang</li>
              <li>
                Jika icon bintang berwarna kuning maka mata uang tersebut yang
                dijadikan mata uang favorite
              </li>
              <li>
                Jika icon bintang berwarna abu-abu maka mata uang tersebut yang
                tidak dijadikan mata uang favorite
              </li>
            </ol>
          </p>
        ),
      },
    ]);
  }, []);

  return (
    <>
      <Container
        maxW="full"
        pt={{ base: "7", md: "10" }}
        px={{ base: 5, md: 12 }}
      >
        <PageTitle id="deposit-page" title={"Kurs Valas"} />
      </Container>

      <Container maxW="full" px={{ base: 0, md: 12 }} pb={48}>
        <WidgetWrapper
          titleId="kurs-title"
          title="Informasi Valas"
          subtitle="Kurs diperbaharui secara berkala"
        >
          <KursWidget />
        </WidgetWrapper>
      </Container>
    </>
  );
};

export default KursPage;
