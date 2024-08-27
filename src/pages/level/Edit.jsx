
import {
    Button,
    Input,
    Modal,
    ModalBody,
    ModalContent,
    ModalFooter,
    ModalHeader,
} from "@nextui-org/react";
import { FaSchool } from "react-icons/fa";

const Edit = ({ isOpen, onOpenChange, itemToEdit, SelectEditItem }) => {
    const handelSubmit = (e) => {
        e.preventDefault();
        console.log("submit");
    };
    const openChange = () => {
        if (isOpen) {
            SelectEditItem(null);
        }
        onOpenChange();
    };
    return (
        <Modal isOpen={isOpen} onOpenChange={openChange} placement="center">
            <ModalContent>
                {(onClose) => (
                    <form onSubmit={handelSubmit} className="dark:text-white">
                        <ModalHeader className="flex flex-col gap-1">
                            Modifié Le Niveau
                        </ModalHeader>
                        <ModalBody>
                            <Input
                                size="sm"
                                autoFocus
                                label="Nome"
                                placeholder="Enter Le Nom De Niveau"
                                variant="bordered"
                            />
                        </ModalBody>
                        <ModalFooter>
                            <Button color="danger" variant="light" onPress={onClose}>
                                Ferme
                            </Button>
                            <Button color="success" type="submit">
                                Modifier
                            </Button>
                        </ModalFooter>
                    </form>
                )}
            </ModalContent>
        </Modal>
    );
};

export default Edit;
