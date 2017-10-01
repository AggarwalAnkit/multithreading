//
//  WorkerManager.m
//  multithreading
//
//  Created by AA on 02/10/17.
//  Copyright © 2017 Facebook. All rights reserved.
//

#import <Foundation/Foundation.h>
#import "React/RCTLog.h"

#import "WorkerManager.h"

@implementation WorkerManager
RCT_EXPORT_MODULE(WorkerModule);

RCT_EXPORT_METHOD(doWork) {
  dispatch_async( dispatch_get_global_queue(DISPATCH_QUEUE_PRIORITY_DEFAULT, 0), ^{
    for (int i = 0; i < 1000000; i++) {
      NSLog(@"%d", i);
    }
    dispatch_async( dispatch_get_main_queue(), ^{
      NSLog(@"work done@");
    });
  });
}

@end
