import React from 'react';

/**
 * Component to highlight search terms within text
 * Used to visually mark matching search results in chapter content
 */
export function highlightSearchText(text, searchQuery) {
  if (!searchQuery || typeof text !== 'string' || searchQuery.trim().length < 2) {
    return text;
  }
  
  try {
    const escapedQuery = searchQuery.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
    const regex = new RegExp(`(${escapedQuery})`, 'gi');
    const parts = text.split(regex);
    
    return parts.map((part, i) => {
      const isMatch = regex.test(part);
      // Reset regex lastIndex after test
      regex.lastIndex = 0;
      
      return isMatch ? (
        <mark 
          key={i} 
          className="bg-yellow-300/70 dark:bg-yellow-600/50 px-0.5 rounded font-medium"
        >
          {part}
        </mark>
      ) : (
        <React.Fragment key={i}>{part}</React.Fragment>
      );
    });
  } catch (error) {
    // If regex fails, return original text
    console.error('Search highlight error:', error);
    return text;
  }
}

/**
 * Scroll to the first search result on page
 */
export function scrollToFirstMatch(delay = 300) {
  setTimeout(() => {
    const marks = document.querySelectorAll('mark');
    if (marks.length > 0) {
      const firstMark = marks[0];
      firstMark.scrollIntoView({ 
        behavior: 'smooth', 
        block: 'center',
        inline: 'nearest'
      });
      
      // Add brief flash effect
      firstMark.style.transition = 'background-color 0.3s';
      const originalBg = firstMark.style.backgroundColor;
      firstMark.style.backgroundColor = '#fde047';
      setTimeout(() => {
        firstMark.style.backgroundColor = originalBg;
      }, 600);
    }
  }, delay);
}