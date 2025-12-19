const std = @import("std");

const PAGE_COUNT = 2;

pub fn build(b: *std.Build) void {
    const target = b.standardTargetOptions(.{
        .default_target = .{
            .cpu_arch = .wasm32,
            .os_tag = .freestanding,
        }
    });
    const optimize = b.standardOptimizeOption(.{
        .preferred_optimize_mode = .ReleaseSmall
    });

    const exe = b.addExecutable(.{
        .name = "plutoniaDotOrg",
        .root_module = b.createModule(.{
            .root_source_file = b.path("src/main.zig"),
            .target = target,
            .optimize = optimize
        }),
    });
    
    // <https://github.com/ziglang/zig/issues/8633>
    exe.global_base = 6560;
    exe.entry = .disabled;
    exe.rdynamic = true;
    exe.import_memory = true;
    exe.stack_size = std.wasm.page_size;

    exe.initial_memory = std.wasm.page_size * PAGE_COUNT;
    exe.max_memory     = std.wasm.page_size * PAGE_COUNT;

    b.installArtifact(exe);
}
