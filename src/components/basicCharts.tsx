import { Card, CardBody, CardHeader, Divider, HStack, Heading, VStack } from "@chakra-ui/react";
import ReactECharts from "echarts-for-react"; // import reactecharts
import { DoughnutOption, Nightingaleoption } from "../charts/doughnut-options";
import { BasicBarOption, BasicStackedBarOption } from "../charts/bar-options";

export default function BasicCharts() {
  return (
    <VStack w="100%" align="stretch" spacing={5}>
      <HStack w="100%" align="stretch" spacing={5}>
        <Card w="100%" padding={4}>
          <CardHeader>
            <Heading size="md">Doughnut Chart</Heading>
          </CardHeader>
          <Divider />
          <CardBody>
            <ReactECharts option={DoughnutOption} />
          </CardBody>
        </Card>
        <Card w="100%">
          <CardHeader>
            <Heading size="md">Doughnut Chart</Heading>
          </CardHeader>
          <CardBody>
            <ReactECharts option={Nightingaleoption} />
          </CardBody>
        </Card>
      </HStack>
      <HStack w="100%" align="stretch" spacing={5}>
        <Card w="100%" padding={4}>
          <CardHeader>
            <Heading size="md">Basic Bar Chart</Heading>
          </CardHeader>
          <Divider />
          <CardBody>
            <ReactECharts option={BasicBarOption} />
          </CardBody>
        </Card>
        <Card w="100%">
          <CardHeader>
            <Heading size="md">Basic Stacked Bar Chart</Heading>
          </CardHeader>
          <CardBody>
            <ReactECharts option={BasicStackedBarOption} />
          </CardBody>
        </Card>
      </HStack>
    </VStack>
  );
}
