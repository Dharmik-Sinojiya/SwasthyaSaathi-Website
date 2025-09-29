import { Box, Typography, List, ListItem, ListItemText } from "@mui/material";
import "../../public/css/index.css";

export default function TermsList({ data }) {
  return (
    <>
      <Box sx={{ my: 7 }}>
        <Box>
          {data.map((item, index) => (
            <Box
              sx={{
                border: "3px solid #ffffff",
                borderRadius: "16px",
                p: 3,
                mb: 3,
                backgroundColor: "rgb(255,255,255,0.35)",
                color: "#fff",
              }}
              key={index}
            >
              <Typography variant="h6" sx={{ mb: 1, fontWeight: "bold" }}>
                {item.title}
              </Typography>

              {item.onlyList && (
                <>
                  {item.onlyList.map((listItem, i) =>
                    listItem.trim() === "" ? (
                      <br key={i} />
                    ) : (
                      <Box
                        key={i}
                        sx={{
                          pl: 0,
                          my: 0,
                          py: 0,
                          lineHeight: "25px",
                        }}
                      >
                        {listItem}
                      </Box>
                    )
                  )}
                </>
              )}

              {item.content && (
                <>
                  {typeof item.content === "string" ? (
                    <Typography variant="body2">{item.content}</Typography>
                  ) : (
                    <>
                      <Typography variant="body2">
                        {item.content.text}
                      </Typography>
                      <List
                        dense
                        sx={{ pl: 2, listStyleType: "disc", py: 0, my: 0 }}
                      >
                        {item.content.list &&
                          item.content.list.map((item, i) => (
                            <ListItem
                              key={i}
                              sx={{ display: "list-item", pl: 0, my: 0, py: 0 }}
                            >
                              <ListItemText
                                primary={item}
                                primaryTypographyProps={{ variant: "body2" }}
                                sx={{ my: 0 }}
                              />
                            </ListItem>
                          ))}
                      </List>
                      {item.content.text2 && (
                        <Typography variant="body2">
                          {item.content.text2}
                        </Typography>
                      )}

                      <List
                        dense
                        sx={{ pl: 2, listStyleType: "disc", py: 0, my: 0 }}
                      >
                        {item.content.list2 &&
                          item.content.list2 &&
                          item.content.list2.map((item, i) => (
                            <ListItem
                              key={i}
                              sx={{ display: "list-item", pl: 0, my: 0, py: 0 }}
                            >
                              <ListItemText
                                primary={item}
                                primaryTypographyProps={{ variant: "body2" }}
                                sx={{ my: 0 }}
                              />
                            </ListItem>
                          ))}
                      </List>
                      {item.content.text3 && (
                        <Typography variant="body2">
                          {item.content.text3}
                        </Typography>
                      )}
                      <List
                        dense
                        sx={{ pl: 2, listStyleType: "disc", py: 0, my: 0 }}
                      >
                        {item.content.list3 &&
                          item.content.list3 &&
                          item.content.list3.map((item, i) => (
                            <ListItem
                              key={i}
                              sx={{ display: "list-item", pl: 0, my: 0, py: 0 }}
                            >
                              <ListItemText
                                primary={item}
                                primaryTypographyProps={{ variant: "body2" }}
                                sx={{ my: 0 }}
                              />
                            </ListItem>
                          ))}
                      </List>
                    </>
                  )}
                </>
              )}

              {item.sections &&
                item.sections.map((section, sIdx) => (
                  <Box key={sIdx}>
                    {section.subtitle && (
                      <Typography
                        variant="subtitle1"
                        sx={{ fontWeight: "bold" }}
                      >
                        {section.subtitle}
                      </Typography>
                    )}
                    {section.text && (
                      <Typography variant="body2">{section.text}</Typography>
                    )}
                    {section.list && (
                      <List sx={{ listStyleType: "disc", pl: 3, py: 0, my: 0 }}>
                        {section.list.map((point, i) => (
                          <ListItem
                            key={i}
                            sx={{ display: "list-item", py: 0, color: "#fff" }}
                          >
                            <ListItemText primary={point} />
                          </ListItem>
                        ))}
                      </List>
                    )}
                    {section.text2 && (
                      <Typography variant="body2">{section.text2}</Typography>
                    )}
                    {section.subList && (
                      <List sx={{ listStyleType: "disc", pl: 3, py: 0, my: 0 }}>
                        {section.subList.map((point, j) => (
                          <ListItem
                            key={j}
                            sx={{ display: "list-item", py: 0, color: "#fff" }}
                          >
                            <ListItemText primary={point} />
                          </ListItem>
                        ))}
                      </List>
                    )}
                  </Box>
                ))}
            </Box>
          ))}
        </Box>
      </Box>
    </>
  );
}
