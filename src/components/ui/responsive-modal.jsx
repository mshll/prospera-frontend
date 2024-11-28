'use client';

import * as React from 'react';

import { cn } from '@/lib/utils';
import { useMediaQuery } from '@/hooks/use-media-query';
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog';
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from '@/components/ui/drawer';

const desktop = '(min-width: 768px)';

const ResponsiveModal = ({ children, ...props }) => {
  const isDesktop = useMediaQuery(desktop);
  const ResponsiveModal = isDesktop ? Dialog : Drawer;

  return <ResponsiveModal {...props}>{children}</ResponsiveModal>;
};

const ResponsiveModalTrigger = ({ className, children, ...props }) => {
  const isDesktop = useMediaQuery(desktop);
  const ResponsiveModalTrigger = isDesktop ? DialogTrigger : DrawerTrigger;

  return (
    <ResponsiveModalTrigger className={className} {...props} asChild>
      {children}
    </ResponsiveModalTrigger>
  );
};

const ResponsiveModalClose = ({ className, children, ...props }) => {
  const isDesktop = useMediaQuery(desktop);
  const ResponsiveModalClose = isDesktop ? DialogClose : DrawerClose;

  return (
    <ResponsiveModalClose className={className} {...props}>
      {children}
    </ResponsiveModalClose>
  );
};

const ResponsiveModalContent = ({ className, children, ...props }) => {
  const isDesktop = useMediaQuery(desktop);
  const ResponsiveModalContent = isDesktop ? DialogContent : DrawerContent;

  return (
    <ResponsiveModalContent className={className} {...props}>
      {children}
    </ResponsiveModalContent>
  );
};

const ResponsiveModalDescription = ({ className, children, ...props }) => {
  const isDesktop = useMediaQuery(desktop);
  const ResponsiveModalDescription = isDesktop ? DialogDescription : DrawerDescription;

  return (
    <ResponsiveModalDescription className={className} {...props} asChild>
      {children}
    </ResponsiveModalDescription>
  );
};

const ResponsiveModalHeader = ({ className, children, ...props }) => {
  const isDesktop = useMediaQuery(desktop);
  const ResponsiveModalHeader = isDesktop ? DialogHeader : DrawerHeader;

  return (
    <ResponsiveModalHeader className={className} {...props}>
      {children}
    </ResponsiveModalHeader>
  );
};

const ResponsiveModalTitle = ({ className, children, ...props }) => {
  const isDesktop = useMediaQuery(desktop);
  const ResponsiveModalTitle = isDesktop ? DialogTitle : DrawerTitle;

  return (
    <ResponsiveModalTitle className={className} {...props}>
      {children}
    </ResponsiveModalTitle>
  );
};

const ResponsiveModalBody = ({ className, children, ...props }) => {
  return (
    <div className={cn('px-4 md:px-0', className)} {...props}>
      {children}
    </div>
  );
};

const ResponsiveModalFooter = ({ className, children, ...props }) => {
  const isDesktop = useMediaQuery(desktop);
  const ResponsiveModalFooter = isDesktop ? DialogFooter : DrawerFooter;

  return (
    <ResponsiveModalFooter className={className} {...props}>
      {children}
    </ResponsiveModalFooter>
  );
};

export {
  ResponsiveModal,
  ResponsiveModalTrigger,
  ResponsiveModalClose,
  ResponsiveModalContent,
  ResponsiveModalDescription,
  ResponsiveModalHeader,
  ResponsiveModalTitle,
  ResponsiveModalBody,
  ResponsiveModalFooter,
};
