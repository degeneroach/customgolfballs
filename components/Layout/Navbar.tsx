import {
  Box,
  Flex,
  HStack,
  Link,
  Stack,
  IconButton,
  useDisclosure,
  Image,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalOverlay,
  chakra,
} from "@chakra-ui/react";
import { AiOutlineClose } from "react-icons/ai";
import PrimaryButton from "../UI/PrimaryButton";
import TextIcon from "../UI/TextIcon";
import { HiOutlineMail, HiOutlinePhone } from "react-icons/hi";
import { useRouter } from "next/router";

const navLinks = [
  { name: "Directions", path: "/" },
  { name: "Gallery", path: "/" },
  { name: "Review Us On Google", path: "/" },
];

interface NavbarProps {
  onOpen: () => void;
}

const Navbar: React.FC<NavbarProps> = ({ onOpen: onOpenOrderModal }) => {
  const {
    isOpen: isOpenNavbar,
    onOpen: onOpenNavbar,
    onClose: onCloseNavbar,
  } = useDisclosure();
  const router = useRouter();

  const handleClickLogo = () => {
    router.reload();
  };

  return (
    <Box>
      <Flex
        justifyContent={"flex-end"}
        mb={2}
        display={{ base: "none", sm: "flex" }}
      >
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
          w={{ base: "9.375rem", md: "12.875rem" }}
          h={"2.531rem"}
          cursor={"pointer"}
          onClick={handleClickLogo}
        />
        <HStack alignItems="center">
          <HStack
            as="nav"
            display={{ base: "none", md: "flex" }}
            alignItems="center"
            spacing={{ md: "2rem", lg: "3rem" }}
          >
            {navLinks.map((link, index) => (
              <NavLink key={index} {...link} onClose={onCloseNavbar} />
            ))}
            <PrimaryButton
              size="lg"
              display={{ base: "none", md: "block" }}
              onClick={onOpenOrderModal}
            >
              Order online
            </PrimaryButton>
          </HStack>
        </HStack>

        <Flex flexDirection={"row"} display={{ base: "inherit", md: "none" }}>
          <IconButton
            size="md"
            ml={4}
            icon={
              isOpenNavbar ? (
                <AiOutlineClose />
              ) : (
                <Image
                  src="../images/HamburgerIcon.svg"
                  cursor={"pointer"}
                  alt="Hamburger Icon"
                />
              )
            }
            aria-label="Open Menu"
            onClick={isOpenNavbar ? onCloseNavbar : onOpenNavbar}
          />
        </Flex>
      </Flex>

      {/* Mobile Screen Links */}
      {isOpenNavbar ? (
        <Box
          py={8}
          display={{ base: "inherit", md: "none" }}
          position={"relative"}
        >
          <Modal onClose={onCloseNavbar} size={"full"} isOpen={isOpenNavbar}>
            <ModalOverlay />
            <ModalContent>
              <ModalCloseButton zIndex={1} />
              <ModalBody
                textAlign={"center"}
                fontWeight={"bold"}
                py={"8rem"}
                fontSize={"md"}
                bg="surface-background-secondary"
              >
                <Stack as="nav" spacing={2}>
                  {navLinks.map((link, index) => (
                    <NavLink key={index} {...link} onClose={onCloseNavbar} />
                  ))}
                </Stack>
                <Flex flexDir={"column"} alignItems={"center"}>
                  <TextIcon
                    mb={"3rem"}
                    leftIcon={HiOutlineMail}
                    isBgTransparent={true}
                    textColor={"icon-primary"}
                  >
                    customgolfballprinting@gmail.com
                  </TextIcon>
                  <TextIcon
                    mb={"3rem"}
                    leftIcon={HiOutlinePhone}
                    isBgTransparent={true}
                    textColor={"icon-primary"}
                  >
                    (604) 600-4347
                  </TextIcon>
                </Flex>
                <PrimaryButton
                  size="lg"
                  onClick={() => {
                    onOpenOrderModal(), onCloseNavbar();
                  }}
                >
                  Order online
                </PrimaryButton>
                <Image
                  src="../images/Circle50.svg"
                  alt="Circle"
                  position={"absolute"}
                  bottom={0}
                  left={0}
                />
                <Image
                  src="../images/Circle25.svg"
                  alt="Circle"
                  position={"absolute"}
                  right={0}
                  top={0}
                />
              </ModalBody>
            </ModalContent>
          </Modal>
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
      mb={{base: "3rem", md: 0}}
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
      <chakra.span
        _hover={{
          borderBottomWidth: {base: 2, md: 0},
          borderColor:{base: 'text-hover', sm: 'none'} 
        }}
      >
        {name}
      </chakra.span>
    </Link>
  );
};

export default Navbar;
