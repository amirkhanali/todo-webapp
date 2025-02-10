import Link from "next/link";
import React from "react";
import { Button } from "./ui/button";
import { IdPropType } from "@/lib/utils";

const UpdateLink = ({ id }: IdPropType) => {
  return (
    <Link href={`/todos/update/${id}`}>
      <Button className="hover:bg-slate-100">Update</Button>
    </Link>
  );
};

export default UpdateLink;
