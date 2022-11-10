import React from "react"
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  useDisclosure,
  Button,
} from "@chakra-ui/react"
import { StaticImage } from "gatsby-plugin-image"

const GalleryImage = ({ img }) => {
  const { isOpen, onOpen, onClose } = useDisclosure()
  console.log(img.src)
  return (
    <>
      <img src={img.src} alt={img.alt} quality={95} onClick={onOpen} />

      <Modal isOpen={isOpen} onClose={onClose} isCentered>
        <ModalOverlay bg="blackAlpha.300" backdropFilter="blur(10px)" />
        <ModalContent className="modal-content" top={"4rem"}>
          <ModalBody>
            <img src={img.src} alt={img.alt} onClick={onOpen} />
          </ModalBody>

          <ModalFooter>
            <Button colorScheme="blue" mr={3} onClick={onClose}>
              Close
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  )
}

export default GalleryImage
