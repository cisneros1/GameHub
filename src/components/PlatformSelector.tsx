import { Button, Menu } from "@chakra-ui/react";
import { BsChevronDown } from "react-icons/bs";
import usePlatforms from "../hooks/usePlatforms.ts";
import usePlatform from "../hooks/usePlatform.ts";
import useGameQueryStore from "../store.ts";

const PlatformSelector = () => {
    const { data, error } = usePlatforms();
    const setSelectedPlatformId = useGameQueryStore((s) => s.setPlatformId);
    const selectedPlatformId = useGameQueryStore((s) => s.gameQuery.platformId);
    const selectedPlatform = usePlatform(selectedPlatformId);

    if (error) return null;

    return (
        <Menu.Root>
            <Menu.Trigger asChild>
                <Button>
                    {selectedPlatform?.name ?? "Platforms"}
                    <BsChevronDown />
                </Button>
            </Menu.Trigger>
            <Menu.Positioner>
                <Menu.Content>
                    {data?.results.map((platform) => (
                        <Menu.Item
                            key={platform.id}
                            value={String(platform.id)}
                            onSelect={() => setSelectedPlatformId(platform.id)}
                        >
                            {platform.name}
                        </Menu.Item>
                    ))}
                </Menu.Content>
            </Menu.Positioner>
        </Menu.Root>
    );
};

export default PlatformSelector