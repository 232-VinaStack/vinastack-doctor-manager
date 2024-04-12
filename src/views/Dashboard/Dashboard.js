// Chakra imports
import {
  Box,
  Button,
  Flex,
  Grid,
  Progress,
  SimpleGrid,
  Stat,
  StatLabel,
  StatNumber,
  Table,
  Tbody,
  Td,
  Text,
  Th,
  Thead,
  Tr,
  useColorMode,
  useColorModeValue,
} from "@chakra-ui/react";
// Custom components
import Card from "components/Card/Card.js";
import BarChart from "components/Charts/BarChart";
import LineChart from "components/Charts/LineChart";
import IconBox from "components/Icons/IconBox";
// Custom icons
import {
  CartIcon,
  DocumentIcon,
  GlobeIcon,
  WalletIcon,
} from "components/Icons/Icons.js";
import React, { useEffect, useState } from "react";
// Variables
import {
  barChartData,
  barChartOptions,
  lineChartData,
  lineChartOptions,
} from "variables/charts";
import { pageVisits, socialTraffic } from "variables/general";
import Tables from "./Tables";
import { tablesTableData } from "../../variables/dummyData";
import moment from "moment";
const today = moment();

export default function Dashboard() {
  // Chakra Color Mode
  const iconBlue = useColorModeValue("blue.500", "blue.500");
  const iconBoxInside = useColorModeValue("white", "white");
  const textColor = useColorModeValue("gray.700", "white");

  const { colorMode } = useColorMode();
  const [appointmentView, setappointmentView] = useState({
    total: tablesTableData.length,
    history: 10,
    now: 5,
    incoming: 10
  })
  const countAppointment = () => {
    let history = 0, now = 0, incoming = 0;

    tablesTableData.map(item => {
      const startTime = moment(item.start_time);
      if (startTime.isSame(today, 'day')) {
        now++;
      } else if (startTime.isBefore(moment(), 'day')) {
        history++;
      } else {
        incoming++;
      }
    })
    setappointmentView((state) => ({ ...state, history, now, incoming }))
  }
  useEffect(() => {
    countAppointment()
  }, [])
  
  return (
    <Flex flexDirection="column" pt={{ base: "120px", md: "75px" }}>
      <SimpleGrid columns={{ sm: 1, md: 2, xl: 4 }} spacing="24px" mb="20px">
        <Card minH="8px">
          <Flex direction="column">
            <Flex flexDirection="row" align="center" justify="center" w="100%">
              <Stat me="auto">
                <StatLabel
                  fontSize="xs"
                  color="gray.400"
                  fontWeight="bold"
                  textTransform="uppercase"
                >
                  Total appointment
                </StatLabel>
                <Flex>
                  <StatNumber fontSize="lg" color={textColor} fontWeight="bold">
                    {appointmentView.total}
                  </StatNumber>
                </Flex>
              </Stat>
              <IconBox
                borderRadius="50%"
                as="box"
                h={"45px"}
                w={"45px"}
                bg={iconBlue}
              >
                <WalletIcon h={"24px"} w={"24px"} color={iconBoxInside} />
              </IconBox>
            </Flex>
          </Flex>
        </Card>
        <Card minH="8px">
          <Flex direction="column">
            <Flex flexDirection="row" align="center" justify="center" w="100%">
              <Stat me="auto">
                <StatLabel
                  fontSize="xs"
                  color="gray.400"
                  fontWeight="bold"
                  textTransform="uppercase"
                >
                  Today's appointment
                </StatLabel>
                <Flex>
                  <StatNumber fontSize="lg" color={textColor} fontWeight="bold">
                    {appointmentView.now}
                  </StatNumber>
                </Flex>
              </Stat>
              <IconBox
                borderRadius="50%"
                as="box"
                h={"45px"}
                w={"45px"}
                bg={iconBlue}
              >
                <GlobeIcon h={"24px"} w={"24px"} color={iconBoxInside} />
              </IconBox>
            </Flex>
          </Flex>
        </Card>
        <Card minH="8px">
          <Flex direction="column">
            <Flex flexDirection="row" align="center" justify="center" w="100%">
              <Stat me="auto">
                <StatLabel
                  fontSize="xs"
                  color="gray.400"
                  fontWeight="bold"
                  textTransform="uppercase"
                >
                  Incoming's appointment
                </StatLabel>
                <Flex>
                  <StatNumber fontSize="lg" color={textColor} fontWeight="bold">
                    {appointmentView.incoming}
                  </StatNumber>
                </Flex>
              </Stat>
              <IconBox
                borderRadius="50%"
                as="box"
                h={"45px"}
                w={"45px"}
                bg={iconBlue}
              >
                <DocumentIcon h={"24px"} w={"24px"} color={iconBoxInside} />
              </IconBox>
            </Flex>
          </Flex>
        </Card>
        <Card minH="8px">
          <Flex direction="column">
            <Flex flexDirection="row" align="center" justify="center" w="100%">
              <Stat me="auto">
                <StatLabel
                  fontSize="xs"
                  color="gray.400"
                  fontWeight="bold"
                  textTransform="uppercase"
                >
                  History's appointment
                </StatLabel>
                <Flex>
                  <StatNumber fontSize="lg" color={textColor} fontWeight="bold">
                  {appointmentView.history}
                  </StatNumber>
                </Flex>
              </Stat>
              <IconBox
                borderRadius="50%"
                as="box"
                h={"45px"}
                w={"45px"}
                bg={iconBlue}
              >
                <CartIcon h={"24px"} w={"24px"} color={iconBoxInside} />
              </IconBox>
            </Flex>
          </Flex>
        </Card>
      </SimpleGrid>
      <Tables />
    </Flex>
  );
}
