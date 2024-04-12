import {
  Avatar,
  Badge,
  Button,
  Flex,
  Td,
  Text,
  Tr,
  useColorModeValue,
} from "@chakra-ui/react";
import moment from "moment";
import React from "react";

function TablesTableRow(props) {
  const { user_name, user_phone, symptoms, clinic, start_time, isLast, id } = props;
  const textColor = useColorModeValue("gray.500", "white");
  const titleColor = useColorModeValue("gray.700", "white");
  const bgStatus = useColorModeValue("gray.400", "navy.900");
  const borderColor = useColorModeValue("gray.200", "gray.600");
  const startTime = moment(start_time);
  const isBeforeToday = startTime.isBefore(moment(), 'day');
  const today = moment();
  const isToday = startTime.isSame(today, 'day');
  const statusColor = isBeforeToday ? "gray.400" : isToday ? "green.400" : "yellow.400";
  const status = isBeforeToday ? "Done" : isToday ? "Now" : "Incomming";

  return (
    <Tr>
      <Td borderColor={borderColor} borderBottom={isLast ? "none" : null}>
        <Text fontSize="sm" color={textColor} fontWeight="normal" pb=".5rem">
          {id}
        </Text>
      </Td>
      <Td
        minWidth={{ sm: "250px" }}
        pl="0px"
        borderColor={borderColor}
        borderBottom={isLast ? "none" : null}
      >
        <Flex direction="column">
          <Text
            fontSize="md"
            color={titleColor}
            fontWeight="bold"
            minWidth="100%"
          >
            {user_name}
          </Text>
          <Text fontSize="sm" color="gray.400" fontWeight="normal">
            {user_phone}
          </Text>
        </Flex>
      </Td>

      <Td borderColor={borderColor} borderBottom={isLast ? "none" : null}>
        <Flex direction="column">
          <Text fontSize="md" color={textColor} fontWeight="bold">
            {clinic}
          </Text>
          <Text fontSize="sm" color="gray.400" fontWeight="normal">
            {symptoms?.map((item, index) => `${item?.name}${index != symptoms.length - 1 ? ', ' : ''}`)}
          </Text>
        </Flex>
      </Td>
      <Td borderColor={borderColor} borderBottom={isLast ? "none" : null}>
        <Badge
          bg={statusColor}
          color={statusColor === "Online" ? "white" : "white"}
          fontSize="16px"
          p="3px 10px"
          borderRadius="8px"
        >
          {status}
        </Badge>
      </Td>
      <Td borderColor={borderColor} borderBottom={isLast ? "none" : null}>
        <Text fontSize="md" color={textColor} fontWeight="bold" pb=".5rem">
          {start_time}
        </Text>
      </Td>

    </Tr>
  );
}

export default TablesTableRow;
