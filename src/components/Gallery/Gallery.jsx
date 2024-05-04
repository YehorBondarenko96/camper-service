import {
  AllDiv, 
  Ul,
  Li,
  Image
} from "./Gallery.styled";

export const Gallery = ({ gallery, alt }) => {
  return (
    <AllDiv>
      <Ul>
        {gallery.map((src, index) =>
          <Li key={index}>
            <Image src={src} alt={alt} />
          </Li>
        )}
      </Ul>
    </AllDiv>
  )
};