// Chakra imports
import {
  Flex,
  Table,
  Tbody,
  Text,
  Th,
  Thead,
  Tr,
  useColorModeValue
} from "@chakra-ui/react";
// Custom components
import Card from "components/Card/Card.js";
import CardBody from "components/Card/CardBody.js";
import CardHeader from "components/Card/CardHeader.js";
import TablesTableRow from "components/Tables/TablesTableRow";
import React from "react";
import { tablesTableData } from "../../variables/dummyData";

function Tables() {
  const textColor = useColorModeValue("gray.700", "white");
  const borderColor = useColorModeValue("gray.200", "gray.600");

  return (
    <Flex direction="column" pt={{ base: "50px", md: "15px" }}>
      <Card overflowX={{ sm: "scroll", xl: "hidden" }} pb="0px">
        <CardHeader p="6px 0px 22px 0px">
          <Text fontSize="xl" color={textColor} fontWeight="bold">
            List Appoinment
          </Text>
        </CardHeader>
        <CardBody>
          <Table variant="simple" color={textColor}>
            <Thead>
              <Tr my=".8rem" pl="0px" color="gray.400" >
                <Th borderColor={borderColor}>Id</Th>
                <Th pl="0px" borderColor={borderColor} color="gray.400" >
                  Patient
                </Th>
                <Th borderColor={borderColor} color="gray.400" >Symstom</Th>
                <Th borderColor={borderColor} color="gray.400" >Status</Th>
                <Th borderColor={borderColor} color="gray.400" >Date time</Th>
              </Tr>
            </Thead>
            <Tbody>
              {tablesTableData.map((row, index, arr) => {
                return (
                  <TablesTableRow
                    
                    isLast={index === arr.length - 1 ? true : false}
                    key={index}
                    {...row}
                  />
                );
              })}
            </Tbody>
          </Table>
        </CardBody>
      </Card>
    
    </Flex>
  );
}

export default Tables;
