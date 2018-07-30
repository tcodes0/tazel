import React from "react";
import Backlinks from "../components/Backlinks";
import CloseLink from "../components/CloseLink";
import screen_google from "./SayGoodbyeToFtp/screen_google.png";
import screen_ssh from "./SayGoodbyeToFtp/screen_ssh.png";
import screen_prompt from "./SayGoodbyeToFtp/screen_prompt.png";
import screen_keyfinish from "./SayGoodbyeToFtp/screen_keyfinish.png";
import screen_sshicon from "./SayGoodbyeToFtp/screen_sshicon.png";
import screen_import from "./SayGoodbyeToFtp/screen_import.png";
import screen_importbutton from "./SayGoodbyeToFtp/screen_importbutton.png";
import screen_manage from "./SayGoodbyeToFtp/screen_manage.png";
import screen_genkeyform from "./SayGoodbyeToFtp/screen_genkeyform.png";
import screen_download from "./SayGoodbyeToFtp/screen_download.png";
import screen_hosthome from "./SayGoodbyeToFtp/screen_hosthome.png";
import screen_test from "./SayGoodbyeToFtp/screen_test.png";

const SayGoodbyeToFtp = props => (
  <div
    className="read"
    role="article"
    id="say-goodbye-to-ftp"
    aria-label="Say goodbye to FTP"
  >
    <div className="read-background" role="presentation">
      <div className="read-header">
        <span className="span-date" role="note">
          March 2017, by Thomazella
        </span>
        <CloseLink />
        <h1 className="heading1">Say goodbye to FTP</h1>
      </div>
      <div className="read-text" role="main">
        <p>
          <span className="read-first-line">
            The first way I learned to upload a site over to a server was using
            FTP.
          </span>
          And FTP is good, it has many great free programs out there. It's a
          good way to learn how sites go from local files to being available
          online. It even is easier to relate to other uploads you might have
          done before, because the interface is familiar.
        </p>
        <p>
          There are, however, faster ways to get sites live, and to people doing
          many uploads a day to test things, this saves
          <em>a lot</em> of time. The problem with FTP is that it isn't secure
          (you could SFTP), it's also slow, and using a graphical computer
          program is even slower. The dragging and clicking adds to the
          slowness, and we can automate that, so why not? Get rid of typing
          passwords, too? No, it isn't back breaking to do it. Optionally, it's
          possible to make things even faster using a shell alias or a script. I
          have one{" "}
          <a
            className="other-site"
            href="https://github.com/Thomazella/uploadi.sh"
          >
            over at Github.
          </a>
        </p>
        <p>
          I tried to write a post which explains basic concepts, so someone
          kinda new to this stuff or just curious about this won't be gaping
          hopelessly. And I think it makes a better post to include
          explanations, makes me feel like I did a better job. If you've used
          FTP in web development before you're good.
        </p>

        <h3>Ok. What is the command line?</h3>
        <p>
          It's a tool we'll be using to set this up, and I need to write a post
          in detail about it later, because the command line is this amazingly
          useful cool tool (at least I think so.) But for now it'll suffice to
          say a few basics:
          <ul>
            <li>
              The
              <em>command line</em> and
              <em>CLI</em> mean roughly the same thing.
            </li>
            <li>
              CLI means
              <strong>C</strong>ommand
              <strong>L</strong>ine <strong>I</strong>nterface. Contrast with:
              <strong>G</strong>raphical <strong>U</strong>ser
              <strong>I</strong>nterface.
            </li>
            <li>
              The
              <em> terminal</em> is a program where we use the command line, the
              window.
            </li>
            <li>
              We'll be typing commands in a terminal getting some response back
              from the computer.
            </li>
            <li>
              It's not programming and does not require programming knowledge to
              use.
            </li>
            <li>
              Just like anything else, it requires some persistence to pick up.
            </li>
            <li>
              Seen as a
              <code className="inline">h4ck3r</code> thing. It really is not.
            </li>
            <li>Much faster than a GUI for repetitive work.</li>
            <li>Slower than a GUI for non-repetitive tasks.</li>
          </ul>
          <em className="important">
            Knowing both allows you to play to their strengths.
          </em>
          <h3>Shell and scripts?</h3>
          <p>
            <strong>Shell</strong> is a type of program that is the heart of the
            CLI experience, much like windows for a GUI. The job of the shell is
            to understand the commands typed in the terminal. We'll use a shell
            running
            <strong>Bash</strong>, the most popular shell out there. Bash shell
            scripting is programming a bunch of commands to run together. This
            is actual programming, but not required to upload a site using rsync
            and ssh.
          </p>
          <h3>What is SSH?</h3>
          <p>
            It stands for
            <strong>S</strong>ecure
            <strong>Sh</strong>ell. It's a connection and security solution to
            allow access to a remote computer. After we set it up, we'll let
            rsync do the SSH for us.
            <strong>Rsync</strong> is a really nice file transfer program with
            multiple uses. It can copy files locally on your computer or to
            another one (our case). It can SSH for us, it's smart and doesn't
            transfer repeated data, saving time and bandwidth, it's resilient
            and has a million options.
          </p>
          <p>
            <em className="small">so...</em>
          </p>
          <strong className="big">
            We'll setup SSH access into the web host and upload a site using
            rsync, then we'll go over some ways reduce our work even further
            using bash.
          </strong>
          <h3>Before you begin</h3>
          <h4>Are you on Windows?</h4>
          <p>
            I'm not keen on Windows support for SSH, rsync and bash, but here
            are a few ideas:
          </p>
          <ul>
            <li>
              Windows 10 has SSH{" "}
              <a
                className="other-site"
                href="https://www.howtogeek.com/336775/how-to-enable-and-use-windows-10s-built-in-ssh-commands/"
              >
                on Powershell.
              </a>
            </li>
            <li>
              But I guess you would be better off just using the{" "}
              <a
                className="other-site"
                href="https://www.howtogeek.com/249966/how-to-install-and-use-the-linux-bash-shell-on-windows-10/"
              >
                Windows Subsystem for Linux.
              </a>
            </li>
            <li>
              Not the point here, but I heard{" "}
              <a className="other-site" href="https://putty.org/">
                {" "}
                PuTTy
              </a>{" "}
              is a great GUI for SSH.
            </li>
          </ul>
          <p>
            Sorry to not support Windows further. The minimum you need on your
            system is rsync. On Mac and Linux you should have no problems.
          </p>
          <h4>Do you have FTP upload working already?</h4>
          <p>
            This is important because it means you have a username and password,
            and a way to get in touch with your web host. They usually email you
            this information right after you purchase the hosting plan. You need
            a web host to log into, obviously.
          </p>
          <h2>Step 1: Making sure SSH works</h2>
          <p>
            We need to make sure your hosting provider accepts SSH. The pieces
            of info needed:
          </p>
          <ul>
            <li>Their policy for SSH.</li>
            <li>Port number.</li>
            <li>Username, likely the same used for FTP.</li>
            <li>Servername, likely the same used for FTP.</li>
          </ul>
          <p>
            Each provider may have a different policy in place to allow SSH
            access, so we'll be googling for it. SSH is known and common in web
            development so we should find the info right away. I'm using
            namecheap right now, so I googled for:
          </p>
          <div className="container-image">
            <img
              className="screenshot"
              aria-label="screenshot"
              src={screen_google}
              alt=""
            />
          </div>
          <p>
            Try googling for something similar, using your web host in place of
            mine, obviously. I landed on a knowledge base article with further
            instructions saying I need to contact support to enable SSH. I
            logged into my account and opened a support ticket saying:
          </p>
          <blockquote>
            I would like to access the account using SSH and I am opening a
            ticket as instructed here:
            https://www.namecheap.com/support/knowledgebase/article.aspx/1016
          </blockquote>
          <p>They replied in less than 10 minutes with an email:</p>
          <blockquote>
            Hello Raphael,
            <br /> Thank you for contacting the Namecheap Support Team!
            <br /> We are glad to let you know, that Shell SSH access has been
            enabled for your account. Connection is available on the server via
            port
            <strong>21098.</strong>
            <br /> You can find more information about how to access your
            hosting account via SSH at:
            http://www.namecheap.com/support/knowledgebase/article.aspx/1016/89/how-to-access-my-hosting-account-via-ssh
            <br /> Feel free to use{" "}
            <strong>server179.web-hosting.com as the servername.</strong>
            <br /> Please check it and let us know if you need further
            assistance.
            <br />
            <br /> We are looking forward to hearing from you.
          </blockquote>
          <p>
            They even put other info in the email, the server and port. With
            just this email I was good to go.
          </p>
          <dl>
            <dt>Their policy for SSH</dt>
            <dd>Authorized</dd>
            <dt>Port number</dt>
            <dd>21098</dd>
            <dt>Username</dt>
            <dd>I was hoping it would be the same.</dd>
            <dt>Servername</dt>
            <dd>server179.web-hosting.com</dd>
          </dl>
          <h3>Using SSH on the terminal</h3>
          <p>
            With the information, let's SSH. We need a terminal for that. On
            Linux your terminal name depends on your distro, but is in your
            programs menu. On MacOS it's called Terminal and is inside
            Applications
            <span className="path-arrow" /> Utilities.
          </p>
          <p>Heads up:</p>
          <ul>
            <li>
              All code samples of shell commands are preceded by a{" "}
              <strong>$</strong>.
            </li>
            <li>
              <em>Don't actually type that!</em>
            </li>
          </ul>
          <em>Type only: cal</em>
          <code className="lang-shell">cal</code>
          <p>Okay, I feel better now. Back to SSH.</p>
          <em>Open your terminal and type:</em>
          <code className="lang-shell">ssh</code>
          <em>Expected output:</em>
          <div className="container-image">
            <img
              className="screenshot"
              aria-label="screenshot"
              src={screen_ssh}
              alt=""
            />
          </div>
          <p>This means a SSH program is available and working. Good.</p>
          <em>Notice the prompt?</em>
          <pre>~/Desktop $</pre>
          <p>
            The command we need works like below. Hover or tap on it to show
            examples of information you could enter. Tap outside to hide.
          </p>
          <code className="explained lang-shell">
            ssh -p{" "}
            <span
              className="explains-syntax"
              aria-label="port number"
              data-ex="21098"
            />{" "}
            <span
              data-ex="heyzor"
              className="explains-syntax"
              aria-label="username"
            />@<span
              data-ex="server179.web-hosting.com"
              aria-label="servername"
              className="explains-syntax"
            />
          </code>
          <em>Go ahead and enter the command with your info.</em>
          <p>
            It should say something like 'The authenticity of host ... can't be
            established.' This is normal and will happen the first time
            connecting to any host.
          </p>
          <em>
            Type
            <strong>yes</strong>. Then type your FTP password.
          </em>
          <br />
          <br />
          <em>Expected output:</em>
          <div className="container-image">
            <img
              className="screenshot"
              aria-label="screenshot"
              src={screen_prompt}
              alt=""
            />
          </div>
          <em>Notice the prompt changed?</em>
          <pre>[taz@server179 ~]$</pre>
          <p>
            This means it worked and we're
            <em>logged into the web host</em> and any commands will be executed
            on the remote computer. To test, type
            <code className="inline lang-shell">ls</code> and it should list the
            base directory of your hosting storage. We're done setting up SSH.
          </p>
          <p>
            Go ahead and
            <em>log out</em> with Ctrl + D, this should bring you back to your
            computer. Should login fail, or the program become unresponsive, the
            kill shortcut is Ctrl + C.
          </p>
          <h3>Having trouble?</h3>
          <p>
            This is something you need to work with your web hosting provider.
            If the google search turned up nothing good or just incomplete, I'd
            just email them or contact support asking something bold like:
          </p>
          <blockquote>
            What command do I type in my terminal to SSH into my account?
          </blockquote>
          <p>
            That should at worst give you information, and at best the SSH
            command already figured for you. For problems with SSH you can use a
            similar approach, or just youtube.
          </p>
          <h2>Step 2: Skipping the password</h2>
          <p>Let's type passwords the minimum necessary. We have SSH keys.</p>
          <h3>What are SSH keys?</h3>
          <p>
            A secure, faster authentication method where we don't type
            passwords. It's comprised of a pair of keys, each key being roughly
            a fingerprint saved to a cryptographed file.
          </p>
          <dl>
            <dt>Public key</dt>
            <dd>
              It works like a padlock, it's publically visible on the internet.
            </dd>
            <dt>Private key</dt>
            <dd>The padlock's key, you don't share it with anyone.</dd>
          </dl>
          <p>
            When you try to login, the keys are compared and they must match.
            The only match to your public key is your own private key. There are
            two ways to create the keys:
          </p>
          <h3>Generating SSH keys yourself</h3>
          <p>This method is faster.</p>
          <em>Type on terminal:</em>
          <code className="lang-shell">ssh-keygen</code>
          <p>
            It will ask you for one thing at a time, follow the instructions.
            <strong>Leave the save location on default </strong>and give it a
            password.
          </p>
          <p>Beware:</p>
          <ul>
            <li>
              <strong>Linux - </strong>As far as I know, no way to save the
              key's password across reboots. The only way to go truly
              passwordless is to not type a password on{" "}
              <code className="inline">ssh-keygen</code>
            </li>
            <li>
              The default save path is <code className="inline">~/.ssh</code>{" "}
              which is a hidden directory. Should you browse to it with a file
              manager, enable hidden files to see it properly.
            </li>
            <li>
              The default name for the private key is{" "}
              <code className="inline">id_rsa</code> and public{" "}
              <code className="inline">id_rsa.pub</code>. Should you change the
              name, change the commands too.
            </li>
          </ul>
          <dl>
            <dt>Private key default path</dt>
            <dd>
              <code className="inline">~/.ssh/id_rsa</code>
            </dd>
            <dt>Public key default path</dt>
            <dd>
              <code className="inline">~/.ssh/id_rsa.pub</code>
            </dd>
          </dl>
          <em>Expected output:</em>
          <div className="container-image">
            <img
              className="screenshot portrait"
              aria-label="screenshot"
              src={screen_keyfinish}
              alt=""
            />
          </div>
          <p>
            All good, now we upload the public key to the host keeping the
            private to ourselves.
          </p>
          <em>
            Login at your CPanel, or equivalent software you use to manage your
            hosting, and look for a SSH menu item.
          </em>
          <div className="container-image">
            <img
              className="screenshot portrait"
              aria-label="screenshot"
              src={screen_sshicon}
              alt=""
            />
          </div>
          <em>Import key option.</em>
          <div className="container-image">
            <img
              className="screenshot portrait"
              aria-label="screenshot"
              src={screen_import}
              alt=""
            />
          </div>
          <p>
            It wants you to paste your key in. We'll only be providing the
            public key, leave the private blank. You can browse to your public
            key file, open on a text editor and copy it, or copy it with
            terminal commands.
          </p>
          <em>MacOS</em>
          <code className="lang-shell">cat ~/.ssh/id_rsa.pub | pbcopy</code>
          <em>Linux</em>
          <code className="lang-shell">
            cat ~/.ssh/id_rsa.pub | xclip -selection c
          </code>
          <em>Paste it.</em>
          <div className="container-image">
            <img
              className="screenshot portrait"
              aria-label="screenshot"
              src={screen_importbutton}
              alt=""
            />
          </div>
          <p>After uploading we need to authorize the key.</p>
          <em>Under public keys, click manage.</em>
          <div className="container-image">
            <img
              className="screenshot"
              aria-label="screenshot"
              src={screen_manage}
              alt=""
            />
          </div>
          <em>Click on authorize.</em>
          <p>All done.</p>
          <h3>Generating SSH keys with your host</h3>
          <p>
            Another way is to do it on the control panel. On the SSH menu,
            choose 'generate a new key', right next to 'import'.
          </p>
          <em>Fill in the information.</em>
          <div className="container-image">
            <img
              className="screenshot portrait"
              aria-label="screenshot"
              src={screen_genkeyform}
              alt=""
            />
          </div>
          <p>You should now have a pair of keys.</p>
          <em>
            Under private keys, click 'view/download', right next to 'manage'.
            Then 'download key'.
          </em>
          <div className="container-image">
            <img
              className="screenshot portrait"
              aria-label="screenshot"
              src={screen_download}
              alt=""
            />
          </div>
          <p>
            Private keys stay in our machines and normally live on{" "}
            <code className="inline">~/.ssh</code>. So we need to move this new
            key there.
          </p>
          <em>
            Move
            <code className="inline">id_rsa</code> into{" "}
            <code className="inline">~/.ssh</code> using your file manager.
          </em>
          <p>Or run:</p>
          <code className="explained lang-shell">
            mv{" "}
            <span
              className="explains-syntax"
              aria-label="download location"
              data-ex="~/Downloads/id_rsa"
            />{" "}
            ~/.ssh/id_rsa
          </code>
          <p>
            Because the key was downloaded, it might have lost the strict
            permissions that make it safe. To avoid a SSH error, reset the key
            permissions using:
          </p>
          <code className="lang-shell">chmod 600 ~/.ssh/id_rsa</code>
          <h3>Using the key</h3>
          <p>
            Having authorized the public key on the host and having the private
            key on
            <code className="inline">~/.shh</code>, the command becomes:
          </p>
          <code className="explained lang-shell">
            ssh -p{" "}
            <span
              className="explains-syntax"
              aria-label="port number"
              data-ex="21098"
            />{" "}
            -i ~/.ssh/id_rsa{" "}
            <span
              data-ex="heyzor"
              className="explains-syntax"
              aria-label="username"
            />@<span
              data-ex="server179.web-hosting.com"
              aria-label="servername"
              className="explains-syntax"
            />
          </code>
          <em>
            Just add the
            <code className="inline">-i ~/.ssh/id_rsa</code> bit to the previous
            command and run it.
          </em>
          <ul>
            <li>
              It will ask for
              <strong>the key's</strong> password, provide it.
            </li>
            <li>
              <strong>MacOS - </strong>If you get a keychain pop-up, say{" "}
              <strong>y</strong>es to remember the password.
            </li>
          </ul>
          <p>
            ...you should have logged in! Just like before. When you're done log
            out by hitting Ctrl + D.
          </p>
          <h3>Saving the key's password</h3>
          <p>
            We actually just exchanged one password for another... Now we'll
            save the key's password. If your key has a custom name you need to
            provide its path to the{" "}
            <code className="inline lang-shell">ssh-add</code> command.
          </p>
          <em>
            Feel free to skip this if concerned with security, typing the
            password is always safer.
          </em>
          <h4>Linux</h4>
          <em>
            Install
            <code className="inline">keychain</code> if you don't have it.
          </em>
          <p>
            Edit
            <code className="inline">~/.bashrc</code> to add the following line:
          </p>
          <code>alias loadKeys=‘eval $(keychain -q --eval id_rsa)’</code>
          <em>Open and close your terminal.</em>
          <p>
            Before using SSH, run{" "}
            <code className="inline lang-shell">loadKeys</code> and type your
            password. It will stay saved until you reboot, even if you log out
            and log back in. If you use SSH a lot, you might add{" "}
            <code className="inline">eval $(keychain -q --eval id_rsa)</code> to
            bashrc directly, but it'll prompt for the password after each boot,
            as soon as you open a terminal.
          </p>
          <h4>MacOS</h4>
          <p>You must have accepted the keychain pop-up.</p>
          <code className="lang-shell lang-shell">/usr/bin/ssh-add -A</code>
          <h4>Additional step for MacOS versions after Sierra 10.12.2</h4>
          <em>
            Create a new empty file named <code className="inline">config</code>{" "}
            on <code className="inline">~/.ssh</code>. Copy-paste the following
            lines:
          </em>
          <pre>Host * AddKeysToAgent yes UseKeychain yes</pre>
          <p>
            Goodbye passwords. You also don't need to add{" "}
            <code className="inline">-i ~/.ssh/id_rsa</code> to any SSH command
            anymore and this will persist through reboots.
          </p>
          <h2>Step 3: Setting up Rsync</h2>
          <p>
            You definitely already have a version pre-installed on your system.
            A basic rsync command copies
            <em>source</em> to <em>destination:</em>{" "}
          </p>
          <code className="explained lang-shell">
            rsync{" "}
            <span
              data-ex="index.html"
              className="explains-syntax"
              aria-label="source"
            />{" "}
            <span
              data-ex="destination/index.html"
              aria-label="destination"
              className="explains-syntax"
            />
          </code>
          <p>You can specify options:</p>
          <code className="explained lang-shell">
            rsync{" "}
            <span
              className="explains-syntax"
              aria-label="options"
              data-ex=" --links"
            />{" "}
            <span
              data-ex="index.html"
              className="explains-syntax"
              aria-label="source"
            />{" "}
            <span
              data-ex="destination/index.html"
              aria-label="destination"
              className="explains-syntax"
            />
          </code>
          <p>
            To learn more: <code className="inline lang-shell">man rsync</code>.
            Just know that I wasn't kidding when I said a million. We don't need
            options yet, so leave it blank.
          </p>
          <p>
            To have rsync SSH for us, we'll need to find the path of your home
            directory on the web host. This can be as simple as a login into
            your FTP (here I'm using{" "}
            <a className="other-site" href="https://cyberduck.io/">
              Cyberduck
            </a>) and looking at the current directory:
          </p>
          <div className="container-image">
            <img
              className="screenshot"
              aria-label="screenshot"
              src={screen_hosthome}
              alt=""
            />
          </div>
          <em>Or you can SSH into the host and type:</em>
          <code className="lang-shell">pwd</code>
          <p>
            It will reply to you with the path we're looking for. Let's call
            this path
            <code className="inline">hosthome</code>. It probably contains your
            username on it, something like{" "}
            <code className="inline">/home/heyzor</code> if your username is{" "}
            <code className="inline">heyzor</code>.
          </p>
          <h3>Testing it</h3>
          <p>Let's test sending something over to the host.</p>
          <em>Find a test file. Example:</em>
          <dl>
            <dt>Filename</dt>
            <dd>foo.txt</dd>
            <dt>Path</dt>
            <dd>~/Desktop/foo.txt</dd>
          </dl>
          <em>Fill in your information and execute:</em>
          <code className="explained lang-shell">
            rsync -e "ssh -p
            <span
              className="explains-syntax"
              aria-label="port number"
              data-ex="21098"
            />"
            <span
              data-ex="~/Desktop/foo.txt"
              className="explains-syntax"
              aria-label="source"
            />
            <span
              data-ex="heyzor"
              className="explains-syntax"
              aria-label="username"
            />@<span
              data-ex="server179.web-hosting.com"
              aria-label="servername"
              className="explains-syntax"
            />:<span
              data-ex="/home/heyzor"
              aria-label="hosthome"
              className="explains-syntax"
            />/<span
              data-ex="destination/foo.txt"
              aria-label="destination"
              className="explains-syntax"
            />
          </code>
          <p>Careful:</p>
          <ul>
            <li>
              Make sure the destination directory exists on the host, either
              create it or use an existing one. Rsync will give you an error if
              you use a directory that doesn't exist.
            </li>
          </ul>
          <p>
            If you see no output, that's good. Use SSH or your FTP to verify the
            file arrived on the host.
          </p>
          <em>Alright!</em>
          <div className="container-image">
            <img
              className="screenshot portrait"
              aria-label="screenshot"
              src={screen_test}
              alt=""
            />
          </div>
          <h3>Time for a site upload</h3>
          <p>
            Rsync can easily send a whole directory to another directory on your
            host. Yep, the whole site with <code className="inline">css</code>{" "}
            and <code className="inline">js</code> and any other subdirectories
            you might have, piece of cake. To have it work with directories I
            use roughly these options:
          </p>
          <dl>
            <dt>--recursive</dt>
            <dd>Send subdirectories along with their contents</dd>
            <dt>--update</dt>
            <dd>Skip files that are newer on the destination</dd>
            <dt>--inplace</dt>
            <dd>Only send new data for modified files</dd>
            <dt>--no-relative</dt>
            <dd>Don't use relative path names</dd>
          </dl>
          <code className="lang-shell">
            rsync --recursive --update --inplace --no-relative
          </code>
          <ul>
            <li>
              <strong>Caveat: </strong> when telling rsync about directories you
              want it to send, end their names with a forward slash /
            </li>
          </ul>
          <dl>
            <dt>~/Desktop/test-site</dt>
            <dd>~/Desktop/test-site/</dd>
          </dl>
          <em>Try it:</em>
          <code className="explained lang-shell">
            rsync --recursive --update --inplace --no-relative -e "ssh -p
            <span
              className="explains-syntax"
              aria-label="port number"
              data-ex="21098"
            />"
            <span
              data-ex="~/Desktop/test-site/"
              className="explains-syntax"
              aria-label="source"
            />
            <span
              data-ex="heyzor"
              className="explains-syntax"
              aria-label="username"
            />@<span
              data-ex="server179.web-hosting.com"
              aria-label="servername"
              className="explains-syntax"
            />:<span
              data-ex="/home/heyzor"
              aria-label="hosthome"
              className="explains-syntax"
            />/<span
              data-ex="destination/test-site/"
              aria-label="destination"
              className="explains-syntax"
            />
          </code>
          <p>
            Okay. By now, you should be either sold on this, or not even reading
            anymore. If you chose a directory on the host actually linked to a
            domain,
            <em>you just uploaded a site.</em>
          </p>
          <p>It should be live. Isn't that cool? Fast?</p>
          <p>
            I get it, it might look complicated, but hey, once it's figured out:
          </p>
          <em className="important">Just copy-paste it over and over.</em>
          <p>Or do even better:</p>
          <h2>step 4: Optimize with bash</h2>
          <p>
            I think the bare minimum is to alias the rsync command to something
            smaller. That way we can type{" "}
            <code className="inline lang-shell">uploadSite</code>, and it
            uploads the site!
          </p>
          <em>To create an alias use:</em>
          <code className="explained lang-shell">
            alias
            <span
              className="explains-syntax"
              aria-label="alias name"
              data-ex="foo"
            />="<span
              className="explains-syntax"
              aria-label="command"
              data-ex="echo this is an alias"
            />"
          </code>
          <p>
            Then type
            <em>foo</em> to run{" "}
            <code className="inline lang-shell">echo this is an alias</code>{" "}
          </p>
          <em>Should you want to remove an alias:</em>
          <code className="explained lang-shell">
            unalias{" "}
            <span
              className="explains-syntax"
              data-ex="foo"
              aria-label="alias name"
            />
          </code>
          <p>
            To make the alias permanent we must add it to one of the shell
            config files, like
            <code className="inline">~/.bashrc</code>.
          </p>
          <p>
            <em>
              Open
              <code className="inline">~/.bashrc</code> in a text editor.
            </em>
          </p>
          <ul>
            <li>
              <strong>MacOS - </strong>You may use{" "}
              <code className="inline">~/.bash_profile</code> if you have no{" "}
              <code className="inline">~/.bashrc</code>
            </li>
          </ul>
          <em>Add the alias line to the file:</em>
          <code className="lang-shell">
            alias uploadSite="rsync --recursive --update --inplace --no-relative
            -e "ssh -p 21098" ~/Desktop/test-site/
            heyzor@server179.web-hosting.com:/home/heyzor/destination/test-site/"
          </code>
          <p>
            To cause the shell to read the file, it needs to restart. To do that
            you can restart the terminal, or switch to a new tab.
          </p>
          <p>
            <em>And that's it.</em>
          </p>
          <h3>A function</h3>
          <p>
            The alias is simple and great, but you would have to edit that line
            on your shell file everytime you change the site you want to upload,
            because the source and destination directories are hardcoded.
          </p>
          <p>Here's a trivial function to deal with that problem:</p>
          <pre>
            {`
                  uploadSite() {
                    #this function takes 2 parameters
                  #1 - source directory
                  #2 - destination directory
                  #source is sent to destination via rsync SSH

                  #check enough arguments were provided
                  if [ "$1" == "" -o "$2" == "" ]; then
                    echo "Please provide two arguments"
                    echo "1 - source directory"
                    echo "2 - destination directory"
                    echo "source is sent to destination via rsync SSH"
                    return
                  fi

                  #rsync call
                  rsync --recursive --update --inplace --no-relative -e "ssh -p 21098" "$1" heyzor@server179.web-hosting.com:/home/heyzor/"$2"/
}`}
          </pre>
          <p>
            It essentially just checks if you passed it non-empty names, and
            substitutes them into the rsync command. Please make sure the names
            you pass as arguments are valid! Paste it on your init file, then
            restart the shell.
          </p>
          <em>Use like this:</em>
          <code className="explained lang-shell">
            uploadSite{" "}
            <span
              className="explains-syntax"
              data-ex="~/Desktop/test-site"
              aria-label="source"
            />{" "}
            <span
              className="explains-syntax"
              data-ex="destination/test-site"
              aria-label="destination"
            />
          </code>
          <h3>My own function</h3>
          <p>
            I have my own function for doing this on{" "}
            <a href="https://github.com/Thomazella/uploadi.sh">Github</a>. It's
            slightly easier to use because it figures out the directory names
            for you, but you need to use the same names on both your computer
            and the host.
          </p>
          <em>That's my first post, I hope it's useful!</em>
        </p>
      </div>
      <Backlinks />
      <hr />
    </div>
  </div>
);

export default SayGoodbyeToFtp;
