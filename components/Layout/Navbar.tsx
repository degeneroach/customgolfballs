import {
  Box,
  Flex,
  HStack,
  Button,
  Link,
  Stack,
  IconButton,
  useDisclosure,
  Image,
} from "@chakra-ui/react";
import { GiHamburgerMenu } from "react-icons/gi";
import { AiOutlineClose } from "react-icons/ai";
import PrimaryButton from "../UI/PrimaryButton";
import TextIcon from "../UI/TextIcon";
import { HiOutlineMail, HiOutlinePhone } from "react-icons/hi";

const navLinks = [
  { name: "Directions", path: "#" },
  { name: "Gallery", path: "#" },
  { name: "Review Us On Google", path: "#" },
];

const Navbar = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <Box>
      <Flex justifyContent={"flex-end"} mb={2}>
        <TextIcon
          mb={2}
          mr={4}
          leftIcon={HiOutlineMail}
          isBgTransparent={true}
          textColor={"icon-primary"}
        >
          customgolfballprinting@gmail.com
        </TextIcon>
        <TextIcon
          mb={2}
          leftIcon={HiOutlinePhone}
          isBgTransparent={true}
          textColor={"icon-primary"}
        >
          (604) 600-4347
        </TextIcon>
      </Flex>

      <Flex alignItems="center" justifyContent="space-between" mx="auto">
        <Image
          mr={4}
          src={"../images/Logo1.svg"}
          alt="Logo1"
          w={{ base: "8rem", md: "12.875rem" }}
          h={"2.531rem"}
        />
        <HStack alignItems="center">
          <HStack
            as="nav"
            display={{ base: "none", md: "flex" }}
            alignItems="center"
            spacing={{ md: "2rem", lg: "3rem" }}
          >
            {navLinks.map((link, index) => (
              <NavLink key={index} {...link} onClose={onClose} />
            ))}
            <PrimaryButton size="lg" display={{ base: "none", md: "block" }}>
              Order online
            </PrimaryButton>
          </HStack>
        </HStack>

        <Flex flexDirection={"row"} display={{ base: "inherit", md: "none" }}>
          <PrimaryButton size="md">Order online</PrimaryButton>
          <IconButton
            size="md"
            ml={4}
            icon={isOpen ? <AiOutlineClose /> : <GiHamburgerMenu />}
            aria-label="Open Menu"
            onClick={isOpen ? onClose : onOpen}
          />
        </Flex>
      </Flex>

      {/* Mobile Screen Links */}
      {isOpen ? (
        <Box py={8} display={{ base: "inherit", md: "none" }}>
          <Stack as="nav" spacing={2}>
            {navLinks.map((link, index) => (
              <NavLink key={index} {...link} onClose={onClose} />
            ))}
          </Stack>
        </Box>
      ) : null}
    </Box>
  );
};

// NavLink Component
interface NavLinkProps {
  name: string;
  path: string;
  onClose: () => void;
}

const NavLink = ({ name, path, onClose }: NavLinkProps) => {
  return (
    <Link
      href={path}
      lineHeight="inherit"
      fontWeight={700}
      fontSize={"md"}
      textColor={"text-primary"}
      _hover={{
        textDecoration: "none",
        color: "text-hover",
      }}
      _active={{
        color: "text-active",
      }}
      onClick={() => onClose()}
    >
      {name}
    </Link>
  );
};

export default Navbar;
