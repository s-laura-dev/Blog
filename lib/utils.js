export const renderRichText = (richtext) => {
  return richtext.map((block, index) => {
    switch (block.type) {
      case 'paragraph':
        return (
          <p key={index}>
            {block.children.map((child, childIndex) => child.text).join('')}
          </p>
        );
      // add more rich text cases here
      default:
        return null;
    }
  });
};