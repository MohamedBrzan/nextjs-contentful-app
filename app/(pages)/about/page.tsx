import { createClient } from 'contentful';
import Image from 'next/image';

// Create a Contentful client
const client = createClient({
    space: process.env.CONTENTFUL_SPACE_ID!,
    accessToken: process.env.CONTENTFUL_ACCESS_TOKEN!,
});

// Function to fetch about
async function fetchAbout() {
    try {
        const res = await client.getEntries({
            content_type: 'about', // Replace with your actual content type ID
        });
        return res.items;
    } catch (error) {
        console.error("Error fetching about:", error);
        return []; // Return an empty array on error
    }
}

// Async component to render about
export default async function Page() {
    const about = await fetchAbout();
    
    console.log(about)

    return (
        <div className="container">
            {about.length === 0 ? (
                <p>No about available.</p>
            ) : (
                about.map(({ fields, sys }: any) => (
                    <div key={sys.id}>
                        <h1>{fields.title|| "There's no title"}</h1>
                        <p>{fields.description || "No description available."}</p>
                        <figure>
                            {/* Ensure the image URL is absolute */}
                            <Image
                                src={fields.thumbnail?.fields?.file?.url ? `https:${fields.thumbnail.fields.file.url}` : '/fallback-image.png'}
                                width={500}
                                height={500}
                                alt={fields.title || "Project image"}
                                unoptimized // Optional: Add this if you face issues with image optimization
                            />
                        </figure>
                    </div>
                ))
            )}
        </div>
    );
}
