import Link from "next/link";
import React from "react";

interface buttonProps {
  label: string;
  classes: string;
}

export default function Button({ label, classes }: buttonProps) {
  return (
    <div>
      <Link href="#" className={classes}>
        {label}
      </Link>
    </div>
  );
}
