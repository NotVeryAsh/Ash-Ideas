import React from "react";
import Card from "@/components/Card";
import SearchableCards from "@/components/SearchableCards";

export default function ProjectsPage() {

    return (
        <>
            <h1 className="text-6xl font-bold">Projects</h1>
            <SearchableCards />
        </>
    );
}