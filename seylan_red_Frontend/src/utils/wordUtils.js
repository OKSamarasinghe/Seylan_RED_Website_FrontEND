import PizZip from 'pizzip';
import Docxtemplater from 'docxtemplater';

export const fillTemplate = async (data) => {
  try {
    const response = await fetch("/templates/Seylan_Personal_Details.docx");
    if (!response.ok) {
      throw new Error(`Failed to fetch template file: ${response.statusText}`);
    }
    const arrayBuffer = await response.arrayBuffer();

    // Load the .docx file into PizZip (which works with docxtemplater)
    const zip = new PizZip(arrayBuffer);

    // Create a Docxtemplater instance and load the PizZip object
    const doc = new Docxtemplater(zip);

    // Replace the placeholders with actual data
    doc.setData(data);

    // Compile the document with the data
    doc.render();

    // Get the generated Word document as a Blob
    const out = doc.getZip().generate({ type: "blob" });

    // Return the generated document as a Blob
    return out;
  } catch (error) {
    console.error("Error generating Word document:", error);
    throw error;
  }
};
