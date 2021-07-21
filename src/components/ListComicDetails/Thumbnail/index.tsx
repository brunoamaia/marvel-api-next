import CardMedia from '@material-ui/core/CardMedia';
import Box from '@material-ui/core/Box';

interface thumbnailProps {
  url: string,
}

export default function Thumbnail({ url }: thumbnailProps) {
  return (
    <Box sx={{ mx: 'auto', m: 1, p: 1, textAlign: 'center' }}>
      {url && (
        <CardMedia
          sx={{ maxHeight: '550px', height: '500px', mx: 'auto' }}
          image={url}
          title="comic thumbnail"
        />
      )}
    </Box>
  )
}