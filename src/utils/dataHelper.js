export const addBooks = (prevBooks, newBooks) => {
  return [
    ...prevBooks,
    ...newBooks.reduce((acc, b) => {
      const bookAdded = acc.find(a =>
        a.title.toLowerCase() === b.title.toLowerCase());
      if (!bookAdded) {
        acc.push({
          title: b.title,
          authors: b.author_name?.join(', ')
        });
      }
      return acc;
    }, [])
  ];
};
