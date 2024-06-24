"use client"
import { Modal, ModalBody, ModalContent, ModalFooter, ModalHeader, useDisclosure } from "@nextui-org/react";
import Link from "next/link";

export default function Navbar() {
  const { isOpen, onOpen, onOpenChange } = useDisclosure();
  const navData = [{
    name: "Home",
    link: "/",
    target: "_self"
  }, {
    name: "Blogs",
    link: "https://medium.com/@parjanyahmodi",
    target: "_blank"
  }, {
    name: "Contact Me",
    link: "/#contact-me",
    target: "_self"
  }]
  return <div className="flex flex-row justify-between w-full px-8 xl:px-64 lg:px-44 md:px-30 py-6 md:py-8">
    <div className="flex items-center">
      {/* <Image src="" alt="" className="h-8 w-8" /> */}
      <span className="font-bold text-xl">Parjanya Modi</span>
    </div>
    <div className=" items-center space-x-8 hidden sm:flex">
      {
        navData.map((nav, index) => (
          <Link key={index} href={nav.link} target={nav.target} className="text-xl">{nav.name}</Link>
        ))
      }
    </div>
    <div className="flex sm:hidden">
      <button className="flex flex-col items-center justify-center gap-1 bg-white p-2" onClick={onOpen}>
        <div className="w-4 h-0.5 bg-black"></div>
        <div className="w-4 h-0.5 bg-black"></div>
        <div className="w-4 h-0.5 bg-black"></div>
      </button>
      <Modal isOpen={isOpen} onOpenChange={onOpenChange} backdrop="blur"
        classNames={{
          body: "py-6",
          backdrop: "bg-average-yellow/20 backdrop-opacity-100",
          base: "rounded-none bg-black",
          closeButton: "bg-white active:bg-white/20 rounded-none text-xl p-1 m-1",
        }}
      >
        <ModalContent>
          {
            (onClose) => (
              <>
                <ModalHeader></ModalHeader>
                <ModalBody>
                  <div className="flex flex-col gap-4">
                    {
                      navData.map((nav, index) => (
                        <Link key={index} href={nav.link} target={nav.target} className="text-xl" onClick={onClose}>{nav.name}</Link>
                      ))
                    } </div>
                </ModalBody>
                <ModalFooter>
                </ModalFooter>
              </>
            )
          }
        </ModalContent>
      </Modal>
    </div>
  </div>
}
