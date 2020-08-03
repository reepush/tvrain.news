const Item = (props) => {
  const html = `<div class="Chronology-item"><a class="ChronologyItem-link" target="_blank" href="${props.url}" tabindex="0"><div class="ChronologyItem-root ChronologyItem-simple"><div class="ChronologyItem-body"><div class="ChronologyItem-header"><h2><strong>${props.title}</strong></h2></div><div class="ChronologyItem-footer"><div class="Meta-root"><div class="MetaItem-root"><time class="Timestamp-root">${props.date}</time></div></div></div></div></div></a></div>`
  
  return (
    <div dangerouslySetInnerHTML={{__html: html}}></div>
  )
}

export default Item