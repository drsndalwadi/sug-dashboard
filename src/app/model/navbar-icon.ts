export interface NavBarIcon {
  title:string,             // Menu/icon title
  icon:string,              // Name of FA icon
  navigation_link:string,   // Where do you want to redirect
  size?:string,             // As default size is 2rem
  color?:string             // As default color is green (#75862A)
  isDisabled?:boolean,      // It is not required for each icon
}
