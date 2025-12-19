extern fn consoleLog(ptr: *const u8, len: usize) void;
extern fn consoleWarn(ptr: *const u8, len: usize) void;
extern fn consoleError(ptr: *const u8, len: usize) void;

pub fn info(message:[]const u8) void {
    consoleLog(@ptrCast(message), message.len);
}

pub fn err(message:[]const u8) void {
    consoleError(@ptrCast(message), message.len);
}

pub fn warn(message:[]const u8) void {
    consoleWarn(@ptrCast(message), message.len);
}
