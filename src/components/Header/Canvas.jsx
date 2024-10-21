

import { Drawer } from "flowbite-react";
import { RxCross2 } from "react-icons/rx";


export default function Canvas(prop) {
  const {isOpen, setIsOpen, children} = prop;

  const handleClose = () => setIsOpen(true);

  return (
    <>
      <Drawer className="transition duration-700 " open={isOpen} onClick={() => setIsOpen(false)} onClose={handleClose}>
        <Drawer.Items>
        
        <div className="cross text-right">
            <button className="" onClick={()=>setIsOpen(false)}>
            <RxCross2 size={30}/ >
            </button>
        </div>   
      {children}

        </Drawer.Items>
      </Drawer>
    </>
  );
}

