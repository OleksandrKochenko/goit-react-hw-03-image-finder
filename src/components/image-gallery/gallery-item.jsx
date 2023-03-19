import css from './gallery.module.css';
export default function ImageGalleryItem({
  id,
  preview,
  original,
  description,
  openModal,
}) {
  return (
    <li className={css.image_gallery_item}>
      <img
        className={css.image_gallery_item_image}
        src={preview}
        alt={description}
        name={id}
        data-source={original}
        onClick={openModal}
      />
    </li>
  );
}
