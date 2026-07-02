frontend-app-public
####################

|license-badge| |status-badge|

Purpose
*******

``frontend-app-public`` is the public marketing / landing micro-frontend for
the **SEARN** platform, a customized Open edX deployment used for
regulatory and competency training by health authorities. It is built with
`frontend-platform`_ and is unauthenticated by default — it serves the
pages a visitor sees before (or without ever) logging in:

* **Home** — landing page with hero, "about" summary, and partner logos.
* **About** — organization story, stats, and values.
* **Contact Us** — contact form that posts to the ``contact_us`` endpoint.
* **Request to Join** — onboarding form for NRAs (National Regulatory
  Authorities) and Training Providers, which posts to the
  ``pending_requests`` endpoint.
* **FAQs** — accordion of frequently asked questions.
* **Privacy Policy** and **Terms of Service** — static legal content pages.

The header adapts to authentication state: logged-out visitors see a
**Login** button, logged-in users see a **Dashboard** button linking back
into the LMS.

.. _frontend-platform: https://github.com/openedx/frontend-platform

Getting Started
****************

Prerequisites
=============

`Tutor`_ is the recommended development environment. This MFE is normally
run as part of the broader SEARN Open edX stack (see the ``tutor-mfe`` and
Tutor environment config in the workspace), so you'll generally want an LMS
running locally to fully exercise authenticated header behavior, contact
form submission, and request-to-join submission.

.. _Tutor: https://github.com/overhangio/tutor

Installation
============

The following Tutor plugin code can be used to install and configure this
MFE in a Tutor environment.

.. code-block:: python

    from tutormfe.hooks import MFE_APPS
    from tutor import hooks

    @MFE_APPS.add()
    def _add_public_mfe(mfes):
        mfes["public"] = {
            "repository": "https://github.com/TitanEd/frontend-app-public.git",
            "port": 2040,
            "version": "master",
        }
        return mfes

    catalog_mfe_url = """
    CATALOG_MICROFRONTEND_URL = "https://{{ MFE_HOST }}/public"
    ENABLE_CATALOG_MICROFRONTEND = True
    """

    catalog_mfe_url_dev = """
    CATALOG_MICROFRONTEND_URL = "http://{{ MFE_HOST }}:2040/public"
    ENABLE_CATALOG_MICROFRONTEND = True
    """

    env_items = [
        (
            "openedx-common-settings",
            catalog_mfe_url,
        ),
        (
            "openedx-lms-development-settings",
            catalog_mfe_url_dev,
        ),
        (
            "openedx-lms-common-settings",
            "ENABLE_CATALOG_MICROFRONTEND = True",
        ),
    ]

    for item in env_items:
        hooks.Filters.ENV_PATCHES.add_item(item)

Getting Help
************

For issues specific to SEARN customizations, open an issue against this
repository: https://github.com/TitanEd/frontend-app-public/issues

For general Open edX / frontend-platform questions, the community discussion
forums at https://discuss.openedx.org and the ``#wg-frontend`` Slack channel
are good starting points.

License
*******

The code in this repository is licensed under the AGPLv3 unless otherwise
noted.

Please see `LICENSE <LICENSE>`_ for details.

.. |license-badge| image:: https://img.shields.io/github/license/TitanEd/frontend-app-public.svg
    :target: https://github.com/TitanEd/frontend-app-public/blob/master/LICENSE
    :alt: License

.. |status-badge| image:: https://img.shields.io/badge/Status-Maintained-brightgreen
