import { createGlobalStyle} from "styled-components"
export const GlobalStyles = createGlobalStyle`
  .wrapper_content,.profile,.profile_name .title,.timelineItem_text,.footer,.header,.navbar-light .navbar-nav .nav-link,.navbar-collapse {
    background: ${({ theme }) => theme.body};
    color: ${({ theme }) => theme.text};
    transition: all 0.50s linear;
  }
  .header .header_link.nav-link.active.active{
	  border-bottom: ${({theme}) => theme.border};
	  color: ${({ theme }) => theme.text};
  }
  .section-title, .section-title h6, .MuiTypography-root.about_me_text:last-child, .grid_skills .item_skill,.customTabs_item.active, .customTabs_item{
	  background: ${({ theme }) => theme.body};
	  color: ${({ theme }) => theme.text};
	  transition: all 0.50s linear;
  }
  .section-title span{
	  background:${({ theme }) => theme.text};
	  transition: all 0.50s linear;
  }
  .nav-item-social{
	  color: ${({ theme }) => theme.text};
  }
  ::placeholder, label, .MuiInputLabel-animated{
	  color: ${({theme}) => theme.placeholder};
  }
  .timeline .timeline_dot{
	  border-color:${({ theme }) => theme.text};
  }
  :root {
	  background:${({ theme }) => theme.text};
	  transition: all 0.50s linear;
  }
  canvas.tsparticles-canvas-el{
	  background: white;
  }
`
