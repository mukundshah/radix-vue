import * as RadixUI from './index';

/**
 * Looks a bit of a silly test, however this ensures that we don't accidentally expose something to
 * the outside world that we didn't want!
 */
it('should expose the correct components', () => {
  expect(Object.keys(RadixUI)).toEqual([
    // Accordion
    'Accordion',
    'AccordionItem',
    'AccordionHeader',
    'AccordionTrigger',
    'AccordionContent',

    // Alert Dialog
    'AlertDialog',
    'AlertDialogTrigger',
    'AlertDialogPortal',
    'AlertDialogContent',
    'AlertDialogTitle',
    'AlertDialogDescription',
    'AlertDialogCancel',
    'AlertDialogAction',

    // Aspect Ratio
    'AspectRatio',

    // Avatar
    'Avatar',
    'AvatarImage',
    'AvatarFallback',

    // Checkbox
    'Checkbox',
    'CheckboxIndicator',

    // Collapsible
    'Collapsible',
    'CollapsibleTrigger',
    'CollapsibleContent',

    // Context Menu
    'ContextMenu',
    'ContextMenuTrigger',
    'ContextMenuPortal',
    'ContextMenuContent',
    'ContextMenuGroup',
    'ContextMenuLabel',
    'ContextMenuItem',
    'ContextMenuRadioGroup',
    'ContextMenuRadioItem',
    'ContextMenuCheckboxItem',
    'ContextMenuItemIndicator',
    'ContextMenuSeparator',
    'ContextMenuSub',
    'ContextMenuSubContent',
    'ContextMenuSubTrigger',

    // Dialog
    'Dialog',
    'DialogTrigger',
    'DialogPortal',
    'DialogOverlay',
    'DialogContent',
    'DialogTitle',
    'DialogDescription',
    'DialogClose',

    // Dropdown Menu
    'DropdownMenu',
    'DropdownMenuTrigger',
    'DropdownMenuPortal',
    'DropdownMenuContent',
    'DropdownMenuGroup',
    'DropdownMenuLabel',
    'DropdownMenuItem',
    'DropdownMenuRadioGroup',
    'DropdownMenuRadioItem',
    'DropdownMenuCheckboxItem',
    'DropdownMenuItemIndicator',
    'DropdownMenuSeparator',
    'DropdownMenuSub',
    'DropdownMenuSubContent',
    'DropdownMenuSubTrigger',

    // Hover Card
    'HoverCard',
    'HoverCardTrigger',
    'HoverCardPortal',
    'HoverCardContent',
    'HoverCardArrow',

    // Label
    'Label',

    // Menubar
    'Menubar',
    'MenubarTrigger',
    'MenubarPortal',
    'MenubarContent',
    'MenubarGroup',
    'MenubarLabel',
    'MenubarItem',
    'MenubarRadioGroup',
    'MenubarRadioItem',
    'MenubarCheckboxItem',
    'MenubarItemIndicator',
    'MenubarSeparator',
    'MenubarSub',
    'MenubarSubContent',
    'MenubarSubTrigger',

    // Navigation Menu
    'NavigationMenu',
    'NavigationMenuList',
    'NavigationMenuTrigger',
    'NavigationMenuContent',
    'NavigationMenuItem',
    'NavigationMenuLink',
    'NavigationMenuSub',
    'NavigationMenuViwport',
    'NavigationMenuIndicator',

    // Popover
    'Popover',
    'PopoverAnchor',
    'PopoverTrigger',
    'PopoverPortal',
    'PopoverContent',
    'PopoverClose',
    'PopoverArrow',

    // Progress
    'Progress',
    'ProgressIndicator',

    // Radio Group
    'RadioGroup',
    'RadioGroupItem',
    'RadioGroupIndicator',

    // Scroll Area
    'ScrollArea',
    'ScrollAreaViewport',
    'ScrollAreaScrollbar',
    'ScrollAreaThumb',
    'ScrollAreaCorner',

    // Select
    'Select',
    'SelectTrigger',
    'SelectContent',
    'SelectPortal',

    // Separator
    'Separator',

    // Slider
    'Slider',

    // Switch
    'Switch',

    // Tabs
    'Tabs',

    // Toast
    'Toast',

    // Toggle
    'Toggle',

    // Toggle Group
    'ToggleGroup',

    // Toolbar
    'Toolbar',

    // Tooltip
    'Tooltip',

    // Utility Components
    'AccessibleIcon',
    'Portal',
    'VisuallyHidden',
  ]);
});
