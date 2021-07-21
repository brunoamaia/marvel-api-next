import { useEffect, useState } from "react";
import { useSelector } from "react-redux"

import Typography from '@material-ui/core/Typography';

interface creatorsParams {
  team: {
    colorist?: Array<string>,
    cover?: Array<string>,
    editor?: Array<string>,
    inker?: Array<string>,
    letterer?: Array<string>,
    penciller?: Array<string>,
    writer?: Array<string>,
  }
}

export default function Creators({ team }: creatorsParams) {

  const [haveTeam, setHaveTeam] = useState(false)


  useEffect(() => {
    setHaveTeam(false)
    if (team.colorist !== undefined && team.colorist.length > 0) {
      setHaveTeam(true)
    }
    if (team.cover !== undefined && team.cover.length > 0) {
      setHaveTeam(true)
    }
    if (team.editor !== undefined && team.editor.length > 0) {
      setHaveTeam(true)
    }
    if (team.inker !== undefined && team.inker.length > 0) {
      setHaveTeam(true)
    }
    if (team.letterer !== undefined && team.letterer.length > 0) {
      setHaveTeam(true)
    }
    if (team.penciller !== undefined && team.penciller.length > 0) {
      setHaveTeam(true)
    }
    if (team.writer !== undefined && team.writer.length > 0) {
      setHaveTeam(true)
    }

  }, [team])

  return (
    <>
      {haveTeam && (
        <>
          <Typography variant="h5" component="h4">
            Team
          </Typography>
          {team.writer !== undefined && team.writer.length > 0 && (
            <Typography variant="h6" component="h4">
              Writer: {team.writer}
            </Typography>
          )}
          {team.penciller !== undefined && team.penciller.length > 0 && (
            <Typography variant="h6" component="h4">
              Penciller: {team.penciller}
            </Typography>
          )}
          {team.cover !== undefined && team.cover.length > 0 && (
            <Typography variant="h6" component="h4">
              Cover: {team.cover}
            </Typography>
          )}
          {team.editor !== undefined && team.editor.length > 0 && (
            <Typography variant="h6" component="h4">
              Editor: {team.editor}
            </Typography>
          )}
          {team.colorist !== undefined && team.colorist.length > 0 && (
            <Typography variant="h6" component="h4">
              Colorist: {team.colorist}
            </Typography>
          )}
          {team.inker !== undefined && team.inker.length > 0 && (
            <Typography variant="h6" component="h4">
              Inker: {team.inker}
            </Typography>
          )}
          {team.letterer !== undefined && team.letterer.length > 0 && (
            <Typography variant="h6" component="h4">
              Letterer: {team.letterer}
            </Typography>
          )}
        </>
      )}
    </>
  )
}