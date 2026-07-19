export const faqs = [
  {
    question: 'What is a Git worktree?',
    answer: 'A Git worktree is another working directory connected to the same repository. It lets you keep more than one branch checked out at the same time, without repeatedly stashing changes or replacing the files in your main checkout.',
  },
  {
    question: 'How is FlowTree different from switching branches normally?',
    answer: 'Branch switching reuses one working directory. FlowTree organises separate worktrees, terminals, Git status, and review actions around each stream of work, so a feature, pull-request review, and urgent fix can stay open side by side.',
  },
  {
    question: 'Can I use an existing repository or worktree?',
    answer: 'Yes. You can add existing local repositories, and FlowTree can discover or import worktrees that already exist on disk.',
  },
  {
    question: 'Can I change the branch inside a worktree?',
    answer: 'Yes. FlowTree supports changing the branch checked out in a worktree, including a stash-first flow when that worktree contains changes.',
  },
  {
    question: 'Does FlowTree upload my source code?',
    answer: 'FlowTree has no product backend and does not upload your repositories to FlowTree. Repository data, worktrees, terminal records, and application state remain on your Mac.',
  },
  {
    question: 'Does FlowTree ever use the network?',
    answer: 'FlowTree itself has no cloud service. When you ask Git to fetch, pull, push, or perform another remote operation, your local Git process can contact the remote already configured for that repository using your existing authentication.',
  },
  {
    question: 'Do terminal sessions continue after FlowTree closes?',
    answer: 'Terminal sessions are backed by a dedicated tmux server. They can continue running when FlowTree is closed or moved into the background, then be reattached when you return.',
  },
  {
    question: 'Is tmux required?',
    answer: 'tmux is required for FlowTree\'s persistent embedded terminal sessions. Git worktree and branch management are separate from that terminal dependency.',
  },
  {
    question: 'Which AI coding tools can I use?',
    answer: 'Terminal profiles are command-based rather than tied to one provider, so they can launch a normal shell or the CLI tool you configure. Linked external files and directories currently have Claude-specific startup behaviour.',
  },
  {
    question: 'Which IDEs are supported?',
    answer: 'FlowTree can open worktrees in Finder, Visual Studio Code, Xcode, Android Studio, and IntelliJ IDEA. It can also open individual files from relevant review and conflict-resolution surfaces.',
  },
  {
    question: 'What happens to untracked files in a new worktree?',
    answer: 'FlowTree copies usable untracked files from the main project into a newly created worktree while skipping ignored files and known build, dependency, and IDE-generated directories.',
  },
  {
    question: 'What version of macOS is required?',
    answer: 'The current application target is macOS 26 or later. Final download requirements will be shown on the download page before release.',
  },
];
