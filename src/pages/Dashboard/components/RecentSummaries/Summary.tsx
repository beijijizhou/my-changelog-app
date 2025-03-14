import React, { useState } from 'react';

interface SummaryProps {
  summary: string;
}

const Summary: React.FC<SummaryProps> = ({ summary }) => {
  const [isExpanded, setIsExpanded] = useState<boolean>(false);
  
  // Define a character limit for the truncated version
  const CHAR_LIMIT = 300; // Adjust this value based on your preference

  // Function to truncate HTML safely
  const getTruncatedSummary = (html: string): string => {
    if (html.length <= CHAR_LIMIT) return html;

    // Find a reasonable cutoff point (e.g., after a closing tag)
    let truncated = html.slice(0, CHAR_LIMIT);
    const lastClosingTag = truncated.lastIndexOf('>');
    
    if (lastClosingTag !== -1) {
      truncated = truncated.slice(0, lastClosingTag + 1);
    }

    // Ensure we don’t cut off in the middle of a tag
    if (!truncated.endsWith('</ol>') && !truncated.endsWith('</h2>') && !truncated.endsWith('</li>')) {
      truncated += '...'; // Add ellipsis to indicate truncation
    }

    return truncated;
  };

  // Toggle between full and truncated content
  const displayedSummary = isExpanded ? summary : getTruncatedSummary(summary);

  return (
    <div>
      <div
        className="ql-editor"
        dangerouslySetInnerHTML={{ __html: displayedSummary }}
      />
      {summary.length > CHAR_LIMIT && (
        <div className="flex justify-end mt-4">
          <button
            onClick={() => setIsExpanded(!isExpanded)}
            className="px-4 py-2 rounded text-white bg-blue-500 hover:bg-blue-600 transition-colors duration-200 font-semibold"
          >
            {isExpanded ? 'Show Less' : 'Show More'}
          </button>
        </div>
      )}
    </div>
  );
};

export default Summary;