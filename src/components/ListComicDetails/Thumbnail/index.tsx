import CardMedia from '@material-ui/core/CardMedia';

interface thumbnailProps {
  url: string,
}

export default function Thumbnail({ url }: thumbnailProps) {
  return (
    <>
      {url && (
        <CardMedia
          sx={{ height: '550px', width: '100%', mx: 2 }}
          image={url}
          title="Image title"
        />
      )}
    </>
  )
}