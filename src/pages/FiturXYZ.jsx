import { Button } from "@/components/ui/button";
import PageHeader from "../components/PageHeader";
import { Badge } from "@/components/ui/badge";
import {
  Card,
  CardAction,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { useState } from "react";
import { FaShoppingCart, FaTruck, FaBan, FaDollarSign } from "react-icons/fa";

export default function FiturXYZ() {
  return (
    <div id="dashboard-container">
      <PageHeader title="Dashboard" />

      <p>Ini halaman Fitur XYZ</p>

      <Button>Simpan</Button>
      <Button variant="outline">Simpan</Button>
      <Button variant="secondary">Simpan</Button>
      <Button variant="ghost" size="xs">
        Simpan
      </Button>
      <div className="mt-6">
        <Card>
          <CardHeader>
            <CardTitle>Card Title</CardTitle>
            <CardDescription>Card Description</CardDescription>
            <CardAction>Card Action</CardAction>
          </CardHeader>
          <CardContent>
            <p>Card Content</p>
          </CardContent>
          <CardFooter>
            <p>Card Footer</p>
          </CardFooter>
        </Card>
      </div>
      <div className="mt-6">
        <Badge>Default</Badge>
        <Badge variant="secondary">Secondary</Badge>
        <Badge variant="destructive">Destructive</Badge>
        <Badge variant="outline">Outline</Badge>
        <Badge variant="ghost">Ghost</Badge>
      </div>
    </div>
  );
}
