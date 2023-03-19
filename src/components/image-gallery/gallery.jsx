import ImageGalleryItem from './gallery-item';
import css from './gallery.module.css';

export default function ImageGallery({ images, openModal }) {
  return (
    <ul className={css.image_gallery}>
      {images.map(item => {
        return (
          <ImageGalleryItem
            key={item.id}
            preview={item.preview}
            original={item.original}
            description={item.description}
            openModal={openModal}
          />
        );
      })}
    </ul>
  );
}
