import { createClient } from 'contentful';
import Image from 'next/image';

// Create a Contentful client
const client = createClient({
    space: process.env.CONTENTFUL_SPACE_ID!,
    accessToken: process.env.CONTENTFUL_ACCESS_TOKEN!,
});

// Function to fetch projects
async function fetchProjects() {
    try {
        const res = await client.getEntries({
            content_type: 'home', // Replace with your actual content type ID
        });

        return res.items;
    } catch (error) {
        console.error("Error fetching projects:", error);
        return []; // Return an empty array on error
    }
}

// Async component to render projects
export default async function Page() {
    const projects = await fetchProjects();

    return (
        <div className="container">
            {projects.length === 0 ? (
                <p>No projects available.</p>
            ) : (
                projects.map(({ fields, sys }: any) => (
                    <div key={sys.id}>
                        <h1>{fields.title?.content[0]?.content[0]?.value || "There's no title"}</h1>
                        <p>{fields.description || "No description available."}</p>
                        <figure>
                            {/* Ensure the image URL is absolute */}
                            <Image
                                src={fields.thumbnail?.fields?.file?.url ? `https:${fields.thumbnail.fields.file.url}` : '/fallback-image.png'}
                                width={500}
                                height={500}
                                alt={fields.title?.content[0]?.content[0]?.value || "Project image"}
                                unoptimized // Optional: Add this if you face issues with image optimization
                            />
                        </figure>
                    </div>
                ))
            )}
        </div>
    );
}
