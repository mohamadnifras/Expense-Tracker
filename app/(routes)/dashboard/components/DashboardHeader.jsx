import { UserButton } from "@clerk/nextjs";
import { Menu } from "lucide-react";
import Image from "next/image";
import React from "react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuTrigger,
} from "../../../../@/components/ui/dropdown-menu";
import Link from "next/link";

function DashboardHeader() {
  return (
    <div className="p-5 shadow-sm border-b flex justify-between md:justify-end">
      <div className="flex items-center gap-2">
        <DropdownMenu modal={false}>
          <DropdownMenuTrigger
            asChild
            className="block md:hidden cursor-pointer"
          >
            <Menu />
          </DropdownMenuTrigger>
          <DropdownMenuContent className="w-40" align="end">
            {/* <DropdownMenuLabel>File Actions</DropdownMenuLabel> */}
            <DropdownMenuGroup>
              <DropdownMenuItem asChild>
                <Link href="/dashboard">Dashboard</Link>
              </DropdownMenuItem>

              <DropdownMenuItem asChild>
                <Link href="/dashboard/budgets">Budgets</Link>
              </DropdownMenuItem>

              <DropdownMenuItem asChild>
                <Link href="/dashboard/expenses">Expenses</Link>
              </DropdownMenuItem>

              <DropdownMenuItem asChild>
                <Link href="/dashboard/upgrade">Upgrade</Link>
              </DropdownMenuItem>
            </DropdownMenuGroup>
          </DropdownMenuContent>
        </DropdownMenu>
        <Image
          src={"/logo.svg"}
          alt="logo"
          width={130}
          height={100}
          className="block md:hidden"
        />
      </div>

      <div>
        <UserButton />
      </div>
    </div>
  );
}

export default DashboardHeader;
