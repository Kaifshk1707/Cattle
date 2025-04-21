import { View, Text } from "react-native";
import React, { FC } from "react";

interface DashBoardHeaderProps {
  totalCustomers: string | number | undefined;
  totalMedicines: string | number | undefined;
  totalInward: string | number | undefined;
  totalOutward: string | number | undefined;
}

const DashBoardHeader: FC<DashBoardHeaderProps> = ({
  totalCustomers,
  totalMedicines,
  totalInward,
  totalOutward,
}) => {
  const HomeData = [
    { id: 1, title: "Total Customers", count: 7, color: "#B0BEC5" },
    { id: 2, title: "Total Medicines", count: 39, color: "#4CAF50" },
    { id: 3, title: "Total Inward", count: 4, color: "#FF9800" },
    { id: 4, title: "Total Outward", count: 8, color: "#03A9F4" },
  ];

  return (
    <View
      style={{
        flexDirection: "row",
        justifyContent: "space-between",
        marginBottom: 15,
      }}
    >
      <View
        style={{
          flex: 1,
          marginHorizontal: 5,
          backgroundColor: "#B0BEC5",
          padding: 15,
          borderRadius: 10,
        }}
      >
        <Text style={{ fontSize: 18, color: "#fff", fontWeight: "bold" }}>
          {totalCustomers}
        </Text>
        <Text style={{ fontSize: 14, color: "#fff" }}>Total Customers</Text>
      </View>
      <View
        style={{
          flex: 1,
          marginHorizontal: 5,
          backgroundColor: "#4CAF50",
          padding: 15,
          borderRadius: 10,
        }}
      >
        <Text style={{ fontSize: 18, color: "#fff", fontWeight: "bold" }}>
          {totalMedicines}
        </Text>
        <Text style={{ fontSize: 14, color: "#fff" }}>Total Medicines</Text>
      </View>
      <View
        style={{
          flex: 1,
          marginHorizontal: 5,
          backgroundColor: "#FF9800",
          padding: 15,
          borderRadius: 10,
        }}
      >
        <Text style={{ fontSize: 18, color: "#fff", fontWeight: "bold" }}>
          {totalInward}
        </Text>
        <Text style={{ fontSize: 14, color: "#fff" }}>Total Inward</Text>
      </View>
      <View
        style={{
          flex: 1,
          marginHorizontal: 5,
          backgroundColor: "#03A9F4",
          padding: 15,
          borderRadius: 10,
        }}
      >
        <Text style={{ fontSize: 18, color: "#fff", fontWeight: "bold" }}>
          {totalOutward}
        </Text>
        <Text style={{ fontSize: 14, color: "#fff" }}>Total Outward</Text>
      </View>
    </View>
  );
};

export default DashBoardHeader;
