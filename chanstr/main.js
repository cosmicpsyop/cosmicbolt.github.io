document.addEventListener('DOMContentLoaded', async function () {
    // Function to fetch media metadata from NIP-1 notes by npub/nsec pair and note tags
    const fetchMediaFromNotes = async () => {
        // Implement the logic to connect to the websockets endpoint and retrieve NIP-1 notes
        // Process the notes to extract media metadata, note id, and nostr event id
        const mediaMetadataFromNotes = [
            // Sample media metadata from NIP-1 notes
            { title: 'Video from Note 1', url: 'https://example.com/video1.mp4', id: 'note_id_1', nostrEventId: 'event_id_1' },
            { title: 'Video from Note 2', url: 'https://example.com/video2.mp4', id: 'note_id_2', nostrEventId: 'event_id_2' },
            // Add more media metadata as needed
        ];

        return mediaMetadataFromNotes;
    };

    // Function to fetch media metadata from a JSON file
    const fetchMediaFromJson = async () => {
        // Implement the logic to fetch media metadata from the specified JSON file
        const response = await fetch('path/to/media_metadata.json');
        const mediaMetadataFromJson = await response.json();

        return mediaMetadataFromJson;
    };

    // Choose the appropriate way to fetch media metadata based on your requirements
    // const mediaMetadata = await fetchMediaFromNotes();
    const mediaMetadata = await fetchMediaFromJson();

    const mediaContainer = document.getElementById('media-container');

    // Generate HTML for each media item
    mediaMetadata.forEach(media => {
        const mediaItem = document.createElement('div');
        mediaItem.innerHTML = `
            <h2>${media.title}</h2>
            <video width="320" height="240" controls>
                <source src="${media.url}" type="video/mp4">
                Your browser does not support the video tag.
            </video>
            <p>Note ID: ${media.id}</p>
            <p>Nostr Event ID: ${media.nostrEventId}</p>
        `;
        mediaContainer.appendChild(mediaItem);
    });
});

