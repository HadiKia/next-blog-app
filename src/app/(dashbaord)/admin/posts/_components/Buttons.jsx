"use client";

import ButtonIcon from "@/ui/ButtonIcon";
import { PencilSquareIcon, TrashIcon } from "@heroicons/react/24/outline";
import Link from "next/link";

export const DeletePost = ({ id }) => {
  return (
    <ButtonIcon variant="error" onClick={() => console.log(id)}>
      <TrashIcon className="w-5 h-5 lg:w-6 lg:h-6" />
    </ButtonIcon>
  );
};

export const UpdatePost = ({ id }) => {
  return (
    <Link href={`/admin/posts/${id}/edit`}>
      <ButtonIcon variant="outline">
        <PencilSquareIcon className="w-5 h-5 lg:w-6 lg:h-6" />
      </ButtonIcon>
    </Link>
  );
};
