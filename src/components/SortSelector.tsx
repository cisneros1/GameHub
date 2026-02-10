import { Button, Menu } from "@chakra-ui/react";
import { BsChevronDown } from "react-icons/bs";
import useGameQueryStore from "../store.ts";

const sortOrders = [
    { value: "", label: "Relevance" },
    { value: "-added", label: "Date added" },
    { value: "name", label: "Name" },
    { value: "-released", label: "Release Date" },
    { value: "-metacritic", label: "Popularity" },
    { value: "-rating", label: "Average Rating" },
];

const SortSelector = () => {
    const setSortOrder = useGameQueryStore((s) => s.setSortOrder);
    const sortOrder = useGameQueryStore((s) => s.gameQuery.sortOrder);
    const currentSortOrder = sortOrders.find((order) => order.value === sortOrder);

    return (
        <Menu.Root>
            <Menu.Trigger asChild>
                <Button>
                    Order by: {currentSortOrder?.label ?? "Relevance"}
                    <BsChevronDown />
                </Button>
            </Menu.Trigger>
            <Menu.Positioner>
                <Menu.Content>
                    {sortOrders.map((order) => (
                        <Menu.Item
                            key={order.value}
                            value={order.value}
                            onSelect={() => setSortOrder(order.value)}
                        >
                            {order.label}
                        </Menu.Item>
                    ))}
                </Menu.Content>
            </Menu.Positioner>
        </Menu.Root>
    );
};

export default SortSelector