import {
  Button,
  Chip,
  Input,
  Pagination,
  useDisclosure,
} from "@nextui-org/react";
import { useEffect, useMemo, useState } from "react";
import { FaMailBulk, FaPlus, FaSchool } from "react-icons/fa";
import { FiSearch } from "react-icons/fi";
import Create from "./Create";
import swal from "sweetalert";
import { Link } from "react-router-dom";
import { FiEye } from "react-icons/fi";
import { BiSolidEdit, BiTrash } from "react-icons/bi";
import Edit from "./Edit";
import { PiStudent } from "react-icons/pi";
import { FaUserShield } from "react-icons/fa";
import { HiMail } from "react-icons/hi";
import { FaPhoneVolume } from "react-icons/fa6";
const users = [
  "eknke",
  "zzwcjxj",
  "bjxbjbrf rf",
  "frjr",
  "dsdfdf",
  "ffdfdf",
  "rdffsffffds",
];


const List = () => {
  const [searchItem, setSearchItem] = useState("");
  const [page, setPage] = useState(1);
  const rowsPerPage = 5;

  const pages = useMemo(() => {
    const filteredCentres = users.filter((c) =>
      c.toLowerCase().includes(searchItem.toLowerCase())
    );
    return Math.ceil(filteredCentres.length / rowsPerPage);
  }, [searchItem]);

  const items = useMemo(() => {
    const start = (page - 1) * rowsPerPage;
    const end = start + rowsPerPage;
    const filteredCentres = users.filter((c) =>
      c.toLowerCase().includes(searchItem.toLowerCase())
    );
    return filteredCentres.slice(start, end);
  }, [page, searchItem]);

  const {
    isOpen: isCreateOpen,
    onOpen: onCreateOpen,
    onOpenChange: onCreateChangeOpen,
  } = useDisclosure();
  const {
    isOpen: isEditOpen,
    onOpen: onEditOpen,
    onOpenChange: onEditChangeOpen,
  } = useDisclosure();
  const [itemToEdit, setItemToEdit] = useState(null);
  const [itemToDelete, setItemToDelete] = useState(null);

  const SelectEditItem = (id) => {
    setItemToEdit(id);
    onEditOpen();
  };

  useEffect(() => {
    if (itemToDelete) {
      swal({
        title: "Êtes-vous sûr de vouloir supprimer l'utilisateur ?",
        icon: "warning",
        buttons: true,
        dangerMode: true,
      }).then((isOk) => {
        if (isOk) {
          console.log("delete " + itemToDelete);
        }
        setItemToDelete(null);
      });
    }
  }, [itemToDelete]);

  return (
    <>
      <div className="flex justify-start ">
        <h1 className="text-3xl font-semibold underline">Utilisateurs</h1>
      </div>
      <div className="flex justify-between gap-3 items-end bg-white  shadow-[0px_0px_7px_-2px_rgba(0,0,0,0.75)] p-3 rounded-lg mt-4 dark:bg-[#43474b] dark:text-white">
        <form className="w-full sm:max-w-[44%]">
          <Input
            fullWidth
            isClearable
            placeholder="Rechercher par nom..."
            startContent={<FiSearch />}
            variant="faded"
            onChange={(e) => setSearchItem(e.target.value)}
            value={searchItem}
            onClear={() => setSearchItem("")}
            size="lg"
            className="tracking-widest"
          />
        </form>
        <Button
          endContent={<FaPlus />}
          color="primary"
          variant="flat"
          onPress={onCreateOpen}
        >
          Créer
        </Button>
      </div>
      <div className="rounded-lg border border-gray-200 dark:border-gray-700 mt-4 shadow-[0px_0px_7px_-2px_rgba(0,0,0,0.75)]">
        <div className="overflow-x-auto rounded-t-lg">
          <table className="min-w-full divide-y-2 divide-gray-200 bg-white  dark:divide-gray-700 dark:bg-[#43474b] text-lg">
            <thead className="ltr:text-left rtl:text-right">
              <tr className="font-normal">
                <th className="whitespace-nowrap px-4 py-2  text-gray-900 dark:text-white">
                  #id
                </th>
                <th className="whitespace-nowrap px-4 py-2  text-gray-900 dark:text-white">
                  Nom
                </th>
                <th className="whitespace-nowrap px-4 py-2  text-gray-900 dark:text-white">
                  Prenom
                </th>
                <th className="whitespace-nowrap px-4 py-2  text-gray-900 dark:text-white">
                  Telephone
                </th>
                <th className="whitespace-nowrap px-4 py-2  text-gray-900 dark:text-white">
                  Email
                </th>
                <th className="whitespace-nowrap px-4 py-2  text-gray-900 dark:text-white">
                  Centre
                </th>

                <th className="whitespace-nowrap px-4 py-2  text-gray-900 dark:text-white ">
                  Actions
                </th>
              </tr>
            </thead>

            <tbody className="divide-y divide-gray-200 dark:divide-gray-700 font-sans tracking-wide">
              {items.map((c, i) => (
                <tr
                  className="hover:bg-blue-200 dark:hover:bg-gray-900"
                  key={i}
                >
                  <td className="whitespace-nowrap px-4 py-2 font-medium text-gray-900 dark:text-white w-auto text-center underline underline-offset-2">
                    {i + 1}
                  </td>
                  <td className="whitespace-nowrap px-4 py-2 font-medium text-gray-900 dark:text-white w-auto tracking-widest">
                    {c}
                  </td>
                  <td className="whitespace-nowrap px-4 py-2 text-gray-700 dark:text-gray-200 w-auto ">
                    abdellah
                  </td>
                  <td className="whitespace-nowrap tracking-wider px-4 py-2 text-gray-700 dark:text-gray-200 w-auto text-center">
                    <Chip
                      variant="bordered"
                      color="default"
                      startContent={ <FaPhoneVolume/> }
                      size="lg"
                      radius="sm"
                      className=" "
                    >
                    +212658963214
                    </Chip>
                  </td>
                  <td className="whitespace-nowrap tracking-wider px-4 py-2 text-gray-700 dark:text-gray-200 w-auto text-center">
                    <Chip
                      variant="bordered"
                      color="default"
                      startContent={<HiMail />}
                      size="lg"
                      radius="sm"
                      className=" "
                    >
                      mohamed@gmail.com
                    </Chip>
                  </td>
                  <td className="whitespace-nowrap tracking-wider px-4 py-2 text-gray-700 dark:text-gray-200 w-auto text-center">
                    <Chip
                      variant="bordered"
                      color="default"
                      startContent={<FaSchool />}
                      size="lg"
                      radius="sm"
                    >
                      centre n 1 dschayra eljihadiya
                    </Chip>
                  </td>

                  <td className="whitespace-nowrap px-4 py-2 text-gray-700 dark:text-gray-200 w-full ">
                    <div className="flex justify-center w-full items-center gap-2">
                      {/* <Button
                        size="sm"
                        isIconOnly
                        radius="md"
                        className="text-xl"
                        color="primary"
                        variant="ghost"
                        as={Link}
                        to={`/utilisateurs/show/${i + 1}`}
                      >
                        <FiEye />
                      </Button> */}
                      <Button
                        size="sm"
                        isIconOnly
                        radius="md"
                        className="text-xl"
                        color="warning"
                        variant="ghost"
                        onPress={() => SelectEditItem(i)}
                      >
                        <BiSolidEdit />
                      </Button>
                      <Button
                        size="sm"
                        isIconOnly
                        radius="md"
                        className="text-xl"
                        color="danger"
                        variant="ghost"
                        onClick={() => setItemToDelete(i + 1)}
                      >
                        <BiTrash />
                      </Button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
      <div className="my-4  w-full flex justify-between">
        <Pagination
          showControls
          isCompact
          total={pages}
          page={page}
          onChange={(page) => setPage(page)}
          showShadow
        />
      </div>
      <Create onOpenChange={onCreateChangeOpen} isOpen={isCreateOpen} />
      <Edit
        onOpenChange={onEditChangeOpen}
        isOpen={isEditOpen}
        itemToEdit={itemToEdit}
        SelectEditItem={SelectEditItem}
      />
    </>
  );
};

export default List;
