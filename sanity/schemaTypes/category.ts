// schemas/category.js (Sanity schema example)
import { defineType, defineField } from "sanity";

export const Category = defineType({
    name: "category",
    title: "Category",
    type: "document",
    fields: [
        defineField({
            name: "name",
            title: "Name",
            type: "string",
            validation: (rule) => rule.required(), // Ensures 'name' is required
        }),
        defineField({
            name: "slug",
            title: "Slug",
            type: "slug",
            validation: (rule) => rule.required(), // Ensures 'slug' is required
            options: {
                source: "name", // Slug is generated from the 'name' field
            }
        })
    ]
});
