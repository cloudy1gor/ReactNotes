const ListImages = (props) => {
  const images = props.imagesGet.map((image) => {
    return (
      <img alt={image.description} key={image.id} src={image.urls.regular} />
    );
  });

  return <div>{images}</div>;
};

export default ListImages;
