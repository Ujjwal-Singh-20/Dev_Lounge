/**
 * Maps common file extensions to language identifiers supported by the Monaco editor.
 */
const extensionMap = {
    'js': 'javascript',
    'jsx': 'javascript',
    'ts': 'typescript',
    'tsx': 'typescript',
    'py': 'python',
    'html': 'html',
    'css': 'css',
    'json': 'json',
    'md': 'markdown',
    'rs': 'rust',
    'go': 'go',
    'cpp': 'cpp',
    'c': 'cpp',
    'txt': 'plaintext',
    'xml': 'xml',
    'sql': 'sql',
    'yaml': 'yaml',
    'yml': 'yaml',
};

/**
 * Determines the language based on the file extension.
 * @param {string} filename The name of the file
 * @returns {string} The matched language or 'plaintext'
 */
export const getLanguageFromFilename = (filename) => {
    if (!filename) return 'plaintext';
    const extension = filename.split('.').pop().toLowerCase();
    return extensionMap[extension] || 'plaintext';
};
