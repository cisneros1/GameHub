import { Input, InputGroup } from "@chakra-ui/react";
import { BsSearch } from "react-icons/bs";
import { useRef } from "react";
import useGameQueryStore from "../store.ts";
import { useNavigate } from "react-router-dom";

const SearchInput = () => {
    const ref = useRef<HTMLInputElement>(null);
    const setSearchText = useGameQueryStore((selector) => selector.setSearchText);
    const navigate = useNavigate();

    return (
        <form
            onSubmit={(event) => {
                event.preventDefault();
                if (ref.current) {
                    setSearchText(ref.current.value);
                    navigate("/");
                }
            }}
        >
            <InputGroup startElement={<BsSearch />}>
                <Input
                    ref={ref}
                    borderRadius={20}
                    placeholder="Search games..."
                    variant="subtle"
                />
            </InputGroup>
        </form>
    );
};

export default SearchInput