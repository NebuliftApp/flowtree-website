export interface Faq {
  question: string;
  answer: string;
}

export const faqs: Faq[] = [
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
    answer: 'FlowTree does not upload repositories to a FlowTree service. It reads and changes local files on your Mac. If you push code to a Git remote or use an AI CLI that sends data to its provider, those tools connect directly to their respective services.',
  },
  {
    question: 'Does FlowTree ever use the network?',
    answer: 'FlowTree has no cloud service of its own and collects no usage telemetry. Your local Git process contacts configured remotes when you fetch, pull, push, or enable background sync. Pro activation and periodic checks contact Lemon Squeezy with your licence key and activation ID. AI CLIs and other commands you start in a terminal may contact their own services under their own terms.',
  },
  {
    question: 'Do terminal sessions continue after FlowTree closes?',
    answer: 'Yes. FlowTree starts detached tmux sessions for terminal tabs. They can keep running after FlowTree closes and reconnect when you return. tmux is required for embedded terminals, but worktree and branch management work without it.',
  },
  {
    question: 'Which AI coding tools can I use?',
    answer: 'Open a plain terminal and run any CLI you have installed, or save its command as a terminal profile. Linked files and directories can be selected when starting compatible Claude Code, Codex, Copilot, or Gemini profiles. Free-text commands launch unchanged.',
  },
  {
    question: 'Which IDEs are supported?',
    answer: 'FlowTree can open a worktree in Finder or an installed editor, including Visual Studio Code, Cursor, Zed, Xcode, and JetBrains IDEs. You can also open individual files from review and conflict resolution.',
  },
  {
    question: 'What happens to untracked files in a new worktree?',
    answer: 'Git checks out tracked files in the new worktree. FlowTree can also copy selected untracked and Git-ignored files from the project directory, so useful local setup does not need to be recreated by hand. Your file choices are saved per project and can be changed during setup or in Settings. Generated paths are skipped by default.',
  },
  {
    question: 'What version of macOS is required?',
    answer: 'FlowTree requires macOS 26 or later on an Apple Silicon Mac. It uses your local Git installation and tmux for embedded terminal sessions.',
  },
];
